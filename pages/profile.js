import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Spacer,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "../components/headers/header";
import SubHeader from "../components/headers/subheader";
import MainButton from "../components/buttons/mainButton";
import EventListingCard from "../components/cards/eventListingCard";
import EventDetailsBox from "../components/Boxes/eventdetailsbox.js";
import BasicModal from "../components/modals/modal.js";
import { getSession, withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { API_URL } from "../config/index.js";
import { useRouter } from "next/router";
import NoEventBox from "../components/Boxes/noEvent.js";

export default function Profile({ userEvents, allEvents }) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [eventData, seteventData] = useState(false);
  const [confirmEvent, setConfirmEvent] = useState("");
  const { user } = useUser();
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  useEffect(() => {
    setIsRefreshing(false);
  }, []);

  let username;
  if (user) {
    if ("given_name" in user) {
      username = user.given_name;
    } else username = user.nickname;
  }
  async function addUsertoEvent(event_id) {
    console.log(true);
    if (user) {
      try {
        const response = await fetch(`${API_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            auth_id: user.sub,
            event_attend: event_id,
          }),
        });
        if (response.status === 400) {
          setConfirmEvent("You have already signed up to attend this event");
        } else if (response.status === 200) {
          setConfirmEvent("You have successfully registered for this event");
          refreshData();
        }
      } catch (error) {}
      setTimeout(function () {
        onClose();
        setConfirmEvent("");
      }, 2000);
    }
  }
  function sendEventData(event_id) {
    const datatosend = allEvents.filter((event) => event.event_id === event_id);
    seteventData(datatosend);
    onOpen();
  }
  return user ? (
    <Box m="0 auto" p={10} pt={20}>
      <Box textAlign={"center"} pb={10}>
        <Header content={`Welcome back ${username}!`} />
      </Box>

      <Box textAlign={"center"} pb={5}>
        <SubHeader content={"Your upcoming events"} />
      </Box>

      <Wrap
        spacing={10}
        margin="0 auto"
        maxWidth="1500px"
        justify="space-evenly"
        pb={10}
      >
        {userEvents.length >= 1 ? (
          <>
            {userEvents.slice(0, 3).map((event) => {
              return (
                <WrapItem key={event.event_id}>
                  <EventDetailsBox
                    {...event}
                    removeUser="true"
                    refreshData={refreshData}
                  />
                </WrapItem>
              );
            })}
          </>
        ) : (
          <WrapItem>
            <Center>
              <NoEventBox
                title="No events found"
                text="You have not signed up for any events, please browse our events below"
              />
            </Center>
          </WrapItem>
        )}
      </Wrap>
      <Box>
        {allEvents.length >= 1 ? (
          <Box textAlign={"center"} pt={10} pb={5}>
            <SubHeader content={"Suggested events"} />
          </Box>
        ) : (
          <></>
        )}
        <Spacer />
        <Box>
          {allEvents.slice(0, 3).map((event) => {
            return (
              <EventListingCard
                key={event.event_id}
                onClick={() => sendEventData(event.event_id)}
                {...event}
              />
            );
          })}
        </Box>
        <Center py={10}>
          <MainButton content={"Explore all events"} route={"/events"} />
        </Center>
      </Box>
      {eventData ? (
        <BasicModal
          isOpen={isOpen}
          onClose={onClose}
          {...eventData[0]}
          button1="Close"
          button2="Attend event"
          onClick={() => addUsertoEvent(eventData[0].event_id)}
          confirm={confirmEvent}
        />
      ) : (
        <></>
      )}
    </Box>
  ) : (
    <></>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const [payloadRes, allEventsRes] = await Promise.all([
      fetch(`${API_URL}/users/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          auth_id: session.user.sub,
        }),
      }),
      fetch(`${API_URL}/events/notAttending`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          auth_id: session.user.sub,
        }),
      }),
    ]);
    let [userEvents, allEvents] = await Promise.all([
      payloadRes.json(),
      allEventsRes.json(),
    ]);
    userEvents = userEvents.payload;
    allEvents = allEvents.payload;
    if (!session.user.sub) {
      return {
        redirect: {
          permanent: false,
          destination: "/api/auth/login",
        },
      };
    }
    return { props: { userEvents, allEvents } };
  },
});

// using await here does not allow you to call both requests in parallel, hence the promise syntax is used. Promise.all ensures both promises are fulfilled before moving forwards.
