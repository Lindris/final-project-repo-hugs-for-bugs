import Head from "next/head";
import MainButton from "../components/mainButton";
import SecondaryButton from "../components/SecondaryButton";
import MainImage from "../components/mainImage";
import InfoCard from "../components/cards/infoCard";
import Header from "../components/headers/header";
import SubHeader from "../components/headers/subheader";
import Paragraph from "../components/paragraph";

import {
  GridItem,
  Grid,
  HStack,
  Spacer,
  Flex,
  Box,
  Center,
  Text,
} from "@chakra-ui/react";

//add button tag below h1
//import mainButon from components/button
// import mainImage component and pass down the src and alt as props
//import InfoCard
//add image link
//in main div create react component for InfoCard with content props {text} and heading {}
// create grid to wrap main content in
// grid should encompass the header, main image, cards and button
// Added header placeholder text in infocard
// Replace any text on the page using the Paragraph component so we avoid hard-coding the font-family and maintain re-usability
//import SubHeader and replace paragraph tag with SubHeader tag - remove fontsize and weight
//InfoCard tags insert image url for each icon and headerContent{'Code Clubs'}  etc

//create grid for home page to show 2 images, 2 text boxes and a button to link to further info page - with our vision/rationale
//pick chakra grid layout - for grid within grid
//Under header, within first row of existing grid add another grid with 2 columns and rows
//added a row and column span (temporary border to be able to see boxes)
//Added text sub heading in header box and align left:
//create secondary button component in a file and import here
//created 2nd grid item within grid, to have 2nd image
//added image code and links from ImgBB website with stored images - delete href and border and a tag.
//put images in boxes and resize to 'sm' 

const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2} marginRight="10em" marginLeft="10em" paddingBottom="2em">
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Flex padding="1em" height="100%" flexDirection="column" justifyContent={"flex-end"}>
                <Box mt="1em" mb="1em">
                  <Header content={"Code & Collab"}/>
                </Box>
                <SubHeader content={"Our vision"} />
                <Box mt="1em" mb="1em">
                  <Paragraph content={placeholderText} />
                </Box>
                <Box>
                  <SecondaryButton content={"Learn more"} route={"/"} />
                </Box>
              </Flex>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} align="center">
              <Box boxSize="sm">
                <MainImage
                  src="https://i.ibb.co/8X8cpTH/online-party-meeting-friends-people-keep-in-touch-using-video-call-on-laptop-vector-illustration.jpg"
                  alt="online-party-meeting-friends-people-keep-in-touch-using-video-call-on-laptop-vector-illustration"
                />
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} align="center">
              <Box boxSize="sm">
                <MainImage
                  src="https://i.ibb.co/5L8dV0k/online-party-meeting-friends-people-are-talking-through-a-laptop-at-home-vector-illustration.jpg"
                  alt="online-party-meeting-friends-people-are-talking-through-a-laptop-at-home-vector-illustration"
                />
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={4}>
          <Center p="1em">
            <SubHeader content={"See what's happening"} />
          </Center>
          <Center>
            <Box>
              <Flex>
                <HStack>
                  <InfoCard
                    headerContent={"Code Clubs"}
                    textContent={placeholderText}
                    src={"https://i.ibb.co/bJQL0fJ/icons8-business-400.png"}
                    alt={"coding"}
                  />
                  <Spacer />
                  <InfoCard
                    headerContent={"Hackathons"}
                    textContent={placeholderText}
                    src={"https://i.ibb.co/0tF64tY/icons8-business-400-1.png"}
                    alt={"people working around a table"}
                  />
                  <Spacer />
                  <InfoCard
                    headerContent={"Q&A Events"}
                    textContent={placeholderText}
                    src={"https://i.ibb.co/pP15jcR/icons8-business-400-3.png"}
                    alt={"speaker talking to a group"}
                  />
                </HStack>
              </Flex>
            </Box>
          </Center>
          <Box p="5">
            <Center>
              <MainButton content={"Explore all events"} route={"/events"} />
            </Center>
          </Box>
        </GridItem>
      </Grid >
    </>
  );
}
