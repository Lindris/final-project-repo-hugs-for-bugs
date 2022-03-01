import {
  Grid,
  GridItem,
  Box,
  Center,
  Spacer,
  HStack,
  Flex,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Header from "../components/headers/header";
import SubHeader from "../components/headers/subheader";
import MainButton from "../components/mainButton";
import EventListingCard from "../components/cards/eventListingCard";
import Paragraph from "../components/paragraph";
import EventDetails from "../components/eventListingDetails";
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
  console.log(payload);
  return user ? (
    <>
      <Box pb={10}>
        <Header content={`Welcome back, ${user.given_name}!`} />
      </Box>
      <Wrap
        margin="0 auto"
        maxWidth="1200px"
        justify="space-evenly"
        spacing="30px"
        pb={10}
      >
        {payload.length >= 1 ? (
          <WrapItem>
            <Box
              p={5}
              shadow="md"
              maxWidth="400px"
              minWidth="300px"
              borderWidth="1px"
              flex="1"
              borderRadius="md"
            >
              <HStack mb="4">
                <Paragraph
                  fontSize={"1.5em"}
                  fontWeight={"extrabold"}
                  content={"Your next event"}
                />
              </HStack>

              <Paragraph
                content={`${payload[0].event_type}`}
                fontSize={"1.2em"}
                fontWeight={"bold"}
              />
              <Paragraph
                content={`${new Date(payload[0].event_date)
                  .toString()
                  .slice(0, 15)}`}
                fontSize={"1em"}
                fontWeight={"bold"}
                colour={"brand.mainPurple"}
              />
              <Paragraph
                content={`${payload[0].event_start_time.slice(
                  0,
                  5
                )} - ${payload[0].event_end_time.slice(0, 5)}`}
                fontSize={"1em"}
                fontWeight={"bold"}
              />
              <Paragraph
                content={`${payload[0].event_desc}`}
                fontSize={"0.9em"}
                fontWeight={"medium"}
              />
              <Paragraph
                content={`${payload[0].event_location}`}
                fontSize={"0.9em"}
                fontWeight={"medium"}
              />

              <Paragraph
                content={"Online Event"}
                fontSize={"0.7em"}
                fontWeight={"medium"}
              />
            </Box>
          </WrapItem>
        ) : (
          <WrapItem>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <HStack mb="4">
                <Paragraph
                  fontSize={"1.5em"}
                  fontWeight={"extrabold"}
                  content={"Your next event"}
                />
              </HStack>
              <Paragraph
                content={`You have not signed up for any events, please browse our events below`}
                fontSize={"1.2em"}
                fontWeight={"bold"}
              />
            </Box>
          </WrapItem>
        )}
        {payload.length >= 1 ? (
          <WrapItem>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              maxWidth="400px"
            >
              <HStack mb="4">
                <Paragraph
                  fontSize={"1.5em"}
                  fontWeight={"extrabold"}
                  content={"Your upcoming events"}
                />
                <Spacer />
              </HStack>
              <EventDetails
                type={payload[0].event_type}
                date={payload[0].event_date}
                starttime={payload[0].event_start_time}
                endtime={payload[0].event_end_time}
              />
              {payload.length >= 2 ? (
                <EventDetails
                  type={payload[1].event_type}
                  date={payload[1].event_date}
                  starttime={payload[1].event_start_time}
                  endtime={payload[1].event_end_time}
                />
              ) : (
                <Paragraph
                  content={`To sign up for more, browse events below or on the events page`}
                  fontSize={"1em"}
                />
              )}
            </Box>
          </WrapItem>
        ) : (
          <WrapItem>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <HStack mb="4">
                <Paragraph
                  fontSize={"1.5em"}
                  fontWeight={"extrabold"}
                  content={"Your upcoming events"}
                />
                <Spacer />
              </HStack>
              <Grid templateRows="repeat(2,1fr)">
                <GridItem p="2">
                  <Paragraph
                    content={`To sign up for more, browse events below or on the events page`}
                    fontSize={"1em"}
                  />
                </GridItem>
              </Grid>
            </Box>
          </WrapItem>
        )}

        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          maxWidth="400px"
        >
          <Flex flexDirection="column" mb="5">
            <HStack mb="4">
              <Paragraph
                fontSize={"1.5em"}
                fontWeight={"extrabold"}
                content={"Why not host your own?"}
              />
            </HStack>

            <Paragraph
              color={"light grey"}
              fontSize={"1em"}
              fontWeight={"400"}
              content={
                "Have any ideas or like some of our own? Create an event using our form."
              }
            />
            <Wrap pt={3}>
              {[
                "Imposter syndrome",
                "React Frameworks",
                "Docker",
                "API's",
                "Hooks",
              ].map((event) => (
                <WrapItem>
                  <Tag
                    size={"md"}
                    key={event}
                    variant="solid"
                    bgColor={"brand.secondaryPurple"}
                  >
                    {event}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Flex>
          {/* <span className="tag"># Hackathon</span> */}
        </Box>
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
                // onClick={() => sendEventData(event_id)}
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

// what needs to be sent in order to render the page?
// render only if user is logged in, else redirect to login page
// request needs to get events based on a specific user
// http://localhost:5000/users/profile - request url (send auth_id in body)

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
