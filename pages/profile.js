import { Grid, GridItem, Box, Center } from "@chakra-ui/react";
import Header from "../components/header";
import SubHeader from "../components/subheader";
import MainButton from "../components/mainButton";

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
          <Center>
            <Header text={"Welcome back, Hajara!"} />
          </Center>
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
          <Center>
            <MainButton text={"Explore all events"} route={"/events"} />
          </Center>
        </Box>
      </GridItem>
    </Grid>
  );
}
