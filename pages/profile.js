import { Grid, GridItem, Box, Center, Spacer, HStack } from "@chakra-ui/react";
import Header from "../components/headers/header";
import SubHeader from "../components/headers/subheader";
import MainButton from "../components/mainButton";
import EventListingCard from "../components/cards/eventListingCard";
import Paragraph from "../components/paragraph";

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

export default function Profile() {
  return (
    <>
      <Grid
        h="200px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem colSpan={3} >
          <Box>
            <Header content={"Welcome back, Hajara!"} />
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box
            p={5}
            shadow='md'
            borderWidth='1px'
            flex='1'
            borderRadius='md'>
            <HStack mb="4">
              <Paragraph fontSize={"1.5em"} fontWeight={"extrabold"} content={"Your next event"} />
              <Spacer />
              <Paragraph fontSize={"1em"} colour={"brand.mainPurple"} fontWeight={"extrabold"} content={"View all"} />
            </HStack>
            <Paragraph content={"Test Event"} fontSize={"1.2em"} fontWeight={"bold"} />
            <Paragraph content={"Wed 16 Feb 2022, 00:00"} fontSize={"0.9em"} fontWeight={"bold"} colour={"brand.mainPurple"} />
            <Paragraph content={"Online Event"} fontSize={"0.8em"} fontWeight={"medium"} />
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
        </GridItem>
        <GridItem colSpan={1}>
        </GridItem>
        <GridItem colSpan={3}>
          <Box>
            <SubHeader content={" Suggested events"} />
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

