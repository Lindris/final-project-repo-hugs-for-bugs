import Head from "next/head";
import MainButton from "../components/mainButton";
import MainImage from "../components/mainImage";
import InfoCard from "../components/cards/infoCard";
import { Flex, Spacer, Center, Text, Square, Box } from '@chakra-ui/react'

//add button tag below h1
//import mainButon from components/button

// import mainImage component and pass down the src and alt as props

//import InfoCard
//add image link
//in main div create react component for InfoCard with content props {text} and heading {}
// create grid to wrap main content in 
// grid should encompass the header, main image, cards and button 


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <Box>
          <h1>Code & Collab</h1>
        </Box>
        <Box>
          <MainImage
            src={"https://i.ibb.co/WKTyGwF/1-WPPKg-TLkh-Iphro-To-MHVoo-Q-1.png"}
            alt={"collaboration"}
          />
        </Box>
      </Flex>
      <Flex>
        <Box flex='1'>
          <InfoCard src={"https://i.ibb.co/WKTyGwF/1-WPPKg-TLkh-Iphro-To-MHVoo-Q-1.png"} content={"placeholder text"} heading={"header"} />
        </Box>
      </Flex>
      {/* 
      <MainButton text={"Explore all events"} route={"/events"} /> */}
    </div>
  );
}



