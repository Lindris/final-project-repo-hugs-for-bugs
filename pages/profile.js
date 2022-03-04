import { useState } from "react";
import {
  Box,
  Center,
  Spacer,
  HStack,
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

export default function Profile({ payload, allEvents }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [eventData, seteventData] = useState(false);
  const [confirmEvent, setConfirmEvent] = useState("");
  const { user } = useUser();
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
        }
      } catch (error) {
      }
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
        {payload.length >= 1 ? (
          <WrapItem>
            <ReusableBox
              title="Your next event"
              type={payload[0].event_type}
              date={new Date(payload[0].event_date).toString().slice(0, 15)}
              time={`${payload[0].event_start_time.slice(
                0,
                5
              )} - ${payload[0].event_end_time.slice(0, 5)}`}
              description={payload[0].event_desc}
              link={payload[0].event_location}
              tags={payload[0].event_tags}
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
        {payload.length >= 1 ? (
          <WrapItem>
            <ReusableBox title={"Your upcoming events"} payload={payload} />
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
          {allEvents.map(
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
          event_type={eventData[0].event_type}
          event_desc={eventData[0].event_desc}
          event_date={eventData[0].event_date}
          event_start_time={eventData[0].event_start_time}
          event_end_time={eventData[0].event_end_time}
          event_location={eventData[0].event_location}
          event_tags={eventData[0].event_tags}
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
    let topic = "all";
    const res = await fetch(`${API_URL}/users/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth_id: session.user.sub,
      }),
    });
    let { payload } = await res.json();
    payload = payload.slice(0, 3);
    if (!session.user.sub) {
      return {
        redirect: {
          permanent: false,
          destination: "/api/auth/login",
        },
      };
    }

    const response = await fetch(`${API_URL}/events`);
    const data = await response.json();
    let allEvents = data.payload.slice(0, 3);
    return { props: { payload, allEvents } };
  },
});
