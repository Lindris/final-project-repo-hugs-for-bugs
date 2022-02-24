import Head from "next/head";
import MainButton from "../components/mainButton";
import MainImage from "../components/mainImage";
import InfoCard from "../components/cards/infoCard";
import Paragraph from "../components/paragraph";
import Header from "../components/header";
import { GridItem, Grid, HStack, Spacer, Flex, Box, Center, Text } from '@chakra-ui/react'

//add button tag below h1
//import mainButon from components/button
// import mainImage component and pass down the src and alt as props
//import InfoCard
//add image link
//in main div create react component for InfoCard with content props {text} and heading {}
// create grid to wrap main content in 
// grid should encompass the header, main image, cards and button 

// Replace any text on the page using the Paragraph component so we avoid hard-coding the font-family and maintain re-usability


const placeholderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
      >
        <GridItem colSpan={2}>
          <Box textAlign="center">
          <Header text={"Code"} />
          <Header text={"& Collab"} />
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
            <Paragraph fontSize={"3em"} text={"See what's happening"} fontWeight={"extrabold"} />
          </Center>
          <Center>
            <Box>
              <Flex>
                <HStack>
                  <InfoCard content={placeholderText} />
                  <Spacer />
                  <InfoCard content={placeholderText} />
                  <Spacer />
                  <InfoCard content={placeholderText} />
                </HStack>
              </Flex>
            </Box>
          </Center>
          <Box p="5">
            <Center>
              <MainButton text={"Explore all events"} route={"/events"} />
            </Center>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

