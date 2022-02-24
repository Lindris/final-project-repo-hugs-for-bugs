import { Grid, GridItem, Box, Center } from "@chakra-ui/react";
import Header from "../components/headers/header";
import SubHeader from "../components/headers/subheader";
import MainButton from "../components/mainButton";
import EventListingCard from "../components/cards/eventListingCard";

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
    <Grid
      h="200px"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
    >
      <GridItem colSpan={3} >
        <Box>
          <Header text={"Welcome back, Hajara!"} />
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box></Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box></Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box></Box>
      </GridItem>
      <GridItem colSpan={3}>
        <Box>
          <SubHeader text={"Suggested events"} />
          <Box>
            <EventListingCard />
          </Box>
          <Center>
            <MainButton text={"Explore all events"} route={"/events"} />
          </Center>
        </Box>
      </GridItem>
    </Grid>
  );
}
