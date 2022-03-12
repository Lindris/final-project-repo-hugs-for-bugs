import { useState, useEffect } from "react";
import { API_URL } from "../config/index.js";
import { getSession, useUser } from "@auth0/nextjs-auth0";
import BasicModal from "../components/modals/modal.js";
import { useDisclosure, Box, Wrap, WrapItem } from "@chakra-ui/react";
import Header from "../components/headers/header";
import Link from "next/link";
import { useRouter } from "next/router";
import NoEventBox from "../components/Boxes/noEvent.js";
import EventFilter from "../components/tabs.js";

export default function Events({ payload }) {
  const [eventData, seteventData] = useState(false);
  const { user } = useUser();
  const [confirmEvent, setConfirmEvent] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  useEffect(() => {
    setIsRefreshing(false);
  }, []);

  function sendEventData(event_id) {
    console.log(event_id);
    const datatosend = payload.filter((event) => event.event_id === event_id);
    seteventData(datatosend);
    onOpen();
  }

  async function addUsertoEvent(event_id) {
    if (!user) {
      setConfirmEvent("Please sign up or log in to attend");
      setTimeout(function () {
        onClose();
        setConfirmEvent("");
      }, 3000);
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
      }, 2000);
    }
  }

  return (
    <Box m="0 auto" textAlign={"center"} py={20}>
      <Box pb={5}>
        <Header content={"Upcoming events"} />
      </Box>

      {payload === undefined || payload.length == 0 ? (
        <Wrap
          spacing={10}
          margin="0 auto"
          maxWidth="1500px"
          justify="center"
          pb={10}
        >
          <WrapItem>
            <Link href="/create">
              <a>
                <NoEventBox
                  title="No more events to display"
                  text="It appears you have signed up for all our events. Check back later to see if we have more lined up or create your own"
                />
              </a>
            </Link>
          </WrapItem>
        </Wrap>
      ) : (
        <>
          {payload ? (
            <EventFilter payload={payload} sendEventData={sendEventData} />
          ) : (
            <></>
          )}

          {/* {payload.map((event) => {
            return (
              <EventListingCard
                key={event.event_id}
                onClick={() => sendEventData(event.event_id)}
                {...event}
              />
            );
          })} */}
        </>
      )}
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
  );
}

export async function getServerSideProps(ctx) {
  // Fetch data from external API
  const session = getSession(ctx.req, ctx.res);
  if (!session) {
    const response = await fetch(`${API_URL}/events`);
    const data = await response.json();
    let payload = data.payload;
    payload = payload.slice(0, 10);
    return { props: { payload } };
  } else if (session) {
    const response = await fetch(`${API_URL}/events/notAttending`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth_id: session.user.sub,
      }),
    });
    const data = await response.json();
    let payload = data.payload;
    payload = payload.slice(0, 10);
    return { props: { payload } };
  }
}

// have a condition that check if user exists first
// when user clicks attend event send auth id and event id to the db
// if user is not logged in - display message to say they need to create an account ...
