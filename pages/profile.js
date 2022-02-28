import {
  Grid,
  GridItem,
  Box,
  Center,
  Spacer,
  HStack,
  Flex,
} from "@chakra-ui/react";
import Header from "../components/headers/header";
import SubHeader from "../components/headers/subheader";
import MainButton from "../components/mainButton";
import EventListingCard from "../components/cards/eventListingCard";
import Paragraph from "../components/paragraph";
import EventDetails from "../components/eventListingDetails";
import { ContactUs } from "../components/emailform/emailform";
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

export default function Profile() {
  return (
    <>
      <Grid
        h="1600px"
        // h="200px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <ContactUs />
        <GridItem colSpan={3}>
          <Box>
            <Header content={"Welcome back, Hajara!"} />
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <HStack mb="4">
              <Paragraph
                fontSize={"1.5em"}
                fontWeight={"extrabold"}
                content={"Your next event"}
              />
              <Spacer />
            </HStack>
            <Paragraph
              content={"Test Event"}
              fontSize={"1.2em"}
              fontWeight={"bold"}
            />
            <Paragraph
              content={"Wed 16 Feb 2022, 00:00"}
              fontSize={"0.9em"}
              fontWeight={"bold"}
              colour={"brand.mainPurple"}
            />
            <Paragraph
              content={"Online Event"}
              fontSize={"0.8em"}
              fontWeight={"medium"}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <HStack mb="4">
              <Paragraph
                fontSize={"1.5em"}
                fontWeight={"extrabold"}
                content={"Your upcoming events"}
              />
              <Spacer />
              <Paragraph
                fontSize={"1em"}
                colour={"brand.mainPurple"}
                fontWeight={"extrabold"}
                content={"View all"}
              />
            </HStack>
            <Grid templateRows="repeat(2,1fr)">
              <GridItem p="2">
                <EventDetails />
              </GridItem>
              <GridItem borderTop="solid 1px lightgray" p="2">
                <EventDetails />
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Flex flexDirection="column" mb="5">
              <Paragraph
                color={"dark grey"}
                fontSize={"1.2em"}
                fontWeight={"800"}
                content={"Example header"}
              />
              <Paragraph
                color={"light grey"}
                fontSize={".9em"}
                fontWeight={"400"}
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
              />
            </Flex>
            <span className="tag"># Hackathon</span>
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Box>
            <SubHeader content={"Suggested events"} />
            <Spacer />
            <Box>
              <EventListingCard />
              <EventListingCard />
              <EventListingCard />
            </Box>
            <Center>
              <MainButton content={"Explore all events"} route={"/events"} />
            </Center>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
