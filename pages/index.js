import Head from "next/head";
import MainButton from "../components/mainButton";
import SecondaryButton from "../components/SecondaryButton";
import MainImage from "../components/mainImage";
import InfoCard from "../components/cards/infoCard";
import Header from "../components/headers/header";
import SubHeader from "../components/headers/subheader";
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
        <GridItem colSpan={2}>
          <Box textAlign="center">
            <Header content={"Code"} />
            <Header content={"& Collab"} />
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <MainImage
            src={"https://i.ibb.co/XJwsjgp/1-WPPKg-TLkh-Iphro-To-MHVoo-Q-1.png"}
            alt={"collaboration"}
          />
        </GridItem>
        <GridItem colSpan={4}>
          <Center p="1em">
            <SubHeader content={"See what's happening"} />
          </Center>
          <Center>
            <Box>
              <Flex>
                <HStack>
                  <InfoCard headerContent={"Code Clubs"} textContent={placeholderText} src={"https://i.ibb.co/bJQL0fJ/icons8-business-400.png"} alt={"coding"} />
                  <Spacer />
                  <InfoCard headerContent={"Hackathons"} textContent={placeholderText} src={"https://i.ibb.co/0tF64tY/icons8-business-400-1.png"} alt={"people working around a table"} />
                  <Spacer />
                  <InfoCard headerContent={"Q&A Events"} textContent={placeholderText} src={"https://i.ibb.co/pP15jcR/icons8-business-400-3.png"} alt={"speaker talking to a group"} />
                </HStack>
              </Flex>
            </Box>
          </Center>
          <Box p="5">
            <Center>
              <MainButton content={"Explore all events"} route={"/events"} />
              <SecondaryButton content={"Our story"} route={"/"} />
            </Center>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

