import {
  Box,
  Center,
  Flex,
  Stack,
  useColorModeValue,
  Wrap,
  WrapItem,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdPeople, MdPersonAdd } from "react-icons/md";
import Paragraph from "../paragraph";
import MainImage from "../mainImage";

// Import template from Chakra
// Import Paragraph component, customise text, font weight and size, colour accordingly - for name and date
// Created variables (event_name, event_date) to act as placeholders until we're able to fetch data from the database
// Changed colour of event_date paragraph to reflect brand colours - using brand theme from customtheme.js
// Import Box component and MainImage to add image into card alongside image chosen from website
// TODO: Pass props in - event name, event date, event info? > remove placeholder variables that were created
// in eventListingCard - code from chakra component - configured padding, layout of stack
//added hover boxShadow with purple when hover over
//put image in a box and centred
//added flex for 2 heart icons classNames --before --after
//in CSS specify the hearts and responses
// Moved heart to bottom-right corner of box by adding Flex with align-items set to justify-end




export default function EventListingCard({
  event_date,
  event_name,
  event_desc,
  event_start_time,
  event_end_time,
  onClick,
  count,
  event_image
}) {
  return (
    <Center py={6}>
      <Stack
        maxWidth={"1000px"}
        margin={8}
        w={{ sm: "100%" }}
        height={{ base: "100%", sm: "100%", md: "15rem" }}
        direction={{ base: "column", sm: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"md"}
        borderRadius={"12px"}
        padding={4}
        _hover={{
          boxShadow: "0px 0px 0px 5px #580AFF",
        }}
      >
        <Stack 
          flex={1}
          flexDirection="column"
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          p={1}
          pb={2}
        >
          <Paragraph 
            content={event_name}
            fontSize={"1.5em"}
            fontWeight={"bold"}
          />
          <Paragraph 
            content={`${new Date(event_date)
              .toString()
              .slice(0, 10)}, ${event_start_time.slice(
              0,
              5
            )} - ${event_end_time.slice(0, 5)}`}
            fontSize={"1.2em"}
            fontWeight={"bold"}
            colour={"brand.mainPurple"}
          />
          <Paragraph
            content={event_desc}
            fontSize={"1em"}
            fontWeight={"medium"}
          />
           <Flex pt='2em'>
          <Wrap align="center" spacing={1} >
            <WrapItem>
              <Paragraph
                content={count}
                fontSize={"1.5em"}
                fontWeight={"medium"}
              />
            </WrapItem>
           
            <WrapItem pt={0.5}>
              <MdPeople size={30} />
            </WrapItem>
          </Wrap>
          <Tooltip
            hasArrow
            label="Attend event"
            fontSize="md"
            placement="right"
          >
            <Button
              onClick={onClick}
              bg="none"
              p={0}
              _hover={{
                textDecoration: "none",
                borderColor: "brand.primaryDark",
              }}
            >
            <Box bg='#6FFD83' px={'.7em'} py={'0.3em'} borderRadius={'9px'} ml='1em'>
              <MdPersonAdd size={30}/>
              </Box>
            </Button>
          </Tooltip>
          </Flex>
        </Stack>
        
        {/* image positioning centred in own box */}
        <Flex
          justifyContent={{ sm: "flex-end", md: "center" }}
          alignItems={"center"}
        >
          <Box boxSize="170px" align="center">
            <MainImage
            // pass in event image with the value of the source url, pulled from array in events.js
              src={event_image }
              alt={"image of friends meeting"}
            />
          </Box>
        </Flex>
        {/* heart = 2 icons 1 empty, replaced by 1 red when hover. See css*/}
        <Flex alignItems={"flex-end"}>
          <Box className="favourite">
            <FaRegHeart className="fav--before" />
            <FaHeart className="fav--after" />
          </Box>
        </Flex>
      </Stack>
    </Center>
  );
}
