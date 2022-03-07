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
import MainButton from "../components/mainButton";
import EventListingCard from "../components/cards/eventListingCard";
import ReusableBox from "../components/box.js";
import Link from "next/link";
import BasicModal from "../components/modal.js";
import { getSession, withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { API_URL } from "../config/index.js";
import { useRouter } from "next/router";

export default function Profile({ userEvents, allEvents }) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [notAttending, setNotAttending] = useState(allEvents);
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
    console.log("refreshing");
    // const filterNotAttending = () => {
    const arrayEventId = [];
    userEvents.map(({ event_id }) => {
      arrayEventId.push(event_id);
    });
    const filteredEvents = allEvents.filter((event) => {
      return !arrayEventId.includes(event.event_id);
    });
    setNotAttending(filteredEvents);
  }, [userEvents, allEvents]);

  console.log(notAttending);
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
    if (!user) {
      // display something in the modal to create an account
    } else if (user) {
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
      }, 4000);
    }
  }
  function sendEventData(event_id) {
    const datatosend = allEvents.filter((event) => event.event_id === event_id);
    seteventData(datatosend);
    onOpen();
  }
  return user ? (
    <Box m="0 auto" p={10}>
      <Box textAlign={"center"} pb={10}>
        <Header content={`Welcome back ${username}!`} />
      </Box>
      <Wrap
        spacing={10}
        margin="0 auto"
        maxWidth="1500px"
        justify="space-evenly"
        pb={10}
      >
        {userEvents.length >= 1 ? (
          <WrapItem>
            <ReusableBox
              title="Your next event"
              type={userEvents[0].event_type}
              event_id={userEvents[0].event_id}
              date={new Date(userEvents[0].event_date).toString().slice(0, 15)}
              time={`${userEvents[0].event_start_time.slice(
                0,
                5
              )} - ${userEvents[0].event_end_time.slice(0, 5)}`}
              description={userEvents[0].event_desc}
              link={userEvents[0].event_location}
              tags={userEvents[0].event_tags}
              remove="true"
              refreshData={refreshData}
            />
          </WrapItem>
        ) : (
          <WrapItem>
            <ReusableBox
              title="Your next event"
              content1="You have not signed up for any events, please browse our events below"
            />
          </WrapItem>
        )}
        {userEvents.length >= 2 ? (
          <WrapItem>
            <ReusableBox
              title={"Your upcoming events"}
              payload={userEvents.slice(0, 3)}
              refreshData={refreshData}
            />
          </WrapItem>
        ) : (
          <></>
        )}
        <Link href="/create">
          <a>
            <ReusableBox
              title="Why not host your own?"
              content1="Have any ideas or like some of our own? Create an event using our form."
              tags={[
                "Imposter syndrome",
                "React Frameworks",
                "Docker",
                "API's",
                "React Hooks",
                "Rock, Paper, Scissors",
                "Tick, Tack, Toe",
              ]}
            />
          </a>
        </Link>
      </Wrap>
      <Box>
        <Box textAlign={"center"} pt={10} pb={5}>
          <SubHeader content={"Suggested events"} />
        </Box>
        <Spacer />
        <Box>
          {notAttending
            .slice(0, 3)
            .map(
              ({
                event_type,
                event_date,
                event_desc,
                event_id,
                count,
                event_end_time,
                event_start_time,
              }) => {
                return (
                  <EventListingCard
                    key={event_id}
                    event_name={event_type}
                    event_date={event_date.slice(0, 10)}
                    event_desc={event_desc}
                    event_end_time={event_end_time}
                    event_start_time={event_start_time}
                    onClick={() => sendEventData(event_id)}
                    count={count}
                  />
                );
              }
            )}
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
      fetch(`${API_URL}/events`),
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
