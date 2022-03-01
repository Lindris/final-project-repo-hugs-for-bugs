import { Box, Center, Spacer, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import Header from "../components/headers/header";
import SubHeader from "../components/headers/subheader";
import MainButton from "../components/mainButton";
import EventListingCard from "../components/cards/eventListingCard";
import ReusableBox from "../components/box.js";
import Link from "next/link";
import {
  getSession,
  userProfile,
  withPageAuthRequired,
  useUser,
} from "@auth0/nextjs-auth0";

//create grid with 3 rows and 3 columns using chakra template
//import grid, gridItem from Chakra
//Adjust row numbers and columns
//created box tags inside each gridItem
//add Box to import lineHeight:
//add content into boxes - header, cards for events, button
//import header from components/header
//add a center tag to centre the welcome message
//In bottom row - add our sub header and Mainbutton
//import subHeader and MainButton
// imported in eventlisting component and added in row 3 within a box
//added card for next event and imported
//added eventListeningCard and imported from chakra component into function and
//customised next event card grid, box - padding, height, columns
//duplicate your event card in grid column 2
//amend contents
//removed Praragraph event details text and put it a new EventsDetails component file
//added EventsDetails element in the box below the paragraph HStack
//duplicated the element
//create grid with 2 grid items - templateRows=2 (2 rows 1 fr) and borderTop= solid 1px lightgray - to separate events with a line
//use padding p=2 to make border space between 2 text events
// Added another box in column 3 for card (purpose is unconfirmed). Added two paragraph components for a header and a text.
// Added a span div to display tag - added a border radius of 25px, background color, letter-spacing

export default function Profile({ payload, allEvents }) {
  const { user } = useUser();
  let username;
  if (user) {
    if ("given_name" in user) {
      username = user.given_name;
    } else username = user.nickname;
  }
  return user ? (
    <>
      <Box pb={10}>
        <Header content={`Welcome back, ${username}!`} />
      </Box>
      <Wrap margin="0 auto" maxWidth="1500px" justify="space-evenly" pb={10}>
        {payload.length >= 1 ? (
          <WrapItem>
            <ReusableBox
              title="Your next event"
              type={`${payload[0].event_type}`}
              date={`${new Date(payload[0].event_date)
                .toString()
                .slice(0, 15)}`}
              time={`${payload[0].event_start_time.slice(
                0,
                5
              )} - ${payload[0].event_end_time.slice(0, 5)}`}
              description={`${payload[0].event_desc}`}
              link={`${payload[0].event_location}`}
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
          // <WrapItem>
          //   <ReusableBox
          //     title="Your upcoming events"
          //     content1="To sign up for more, browse events below or on the events page"
          //   />
          // </WrapItem>
          <></>
        )}

        <ReusableBox
          title="Why not host your own?"
          content1={`Have any ideas or like some of our own? Create an event using our
            ${(
              <Link href={"/create"}>
                <a>"form"</a>
              </Link>
            )}
          `}
          tags={[
            "Imposter syndrome",
            "React Frameworks",
            "Docker",
            "API's",
            "React Hooks",
            "Rock, Paper, Scissors",
          ]}
        />
      </Wrap>

      <Box>
        <SubHeader content={"Suggested events"} />
        <Spacer />
        <Box>
          {allEvents.map(({ event_type, event_date, event_desc, event_id }) => {
            return (
              <EventListingCard
                key={event_id}
                event_name={event_type}
                event_date={event_date.slice(0, 10)}
                event_desc={event_desc}
              />
            );
          })}
        </Box>
        <Center py={10}>
          <MainButton content={"Explore all events"} route={"/events"} />
        </Center>
      </Box>
    </>
  ) : (
    <></>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    let topic = "all";
    const res = await fetch(`http://localhost:5000/users/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth_id: session.user.sub,
      }),
    });
    let { payload } = await res.json();
    payload = payload.slice(0, 2);
    if (!session.user.sub) {
      return {
        redirect: {
          permanent: false,
          destination: "/api/auth/login",
        },
      };
    }

    const response = await fetch(`http://localhost:5000/events`);
    const data = await response.json();
    let allEvents = data.payload.slice(0, 3);
    return { props: { payload, allEvents } };
  },
});
