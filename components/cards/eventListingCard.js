import {
    Box,
    Center,
    Flex,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import Paragraph from '../paragraph';
import MainImage from '../mainImage';

// Import template from Chakra
// Import Paragraph component, customise text, font weight and size, colour accordingly - for name and date
// Created variables (event_name, event_date) to act as placeholders until we're able to fetch data from the database
// Changed colour of event_date paragraph to reflect brand colours - using brand theme from customtheme.js
// Import Box component and MainImage to add image into card alongside image chosen from website
// TODO: Pass props in - event name, event date, event info? > remove placeholder variables that were created 

const event_name = "Test Event";
const event_date = "Wed 16 Feb 2022, 00:00";
const event_location = "Online Event";

export default function EventListingCard({}) {
    return (
        <Center py={6}>
            <Stack
                w={{ sm: '100%' }}
                height={{ sm: '300px', md: '15rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'md'}
                padding={4}
                _hover={{ boxShadow: "0px 0px 0px 5px #580AFF" }}>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                    p={1}
                    pt={2}>
                    <Paragraph content={event_name} fontSize={"2em"} fontWeight={"bold"} />
                    <Paragraph content={event_date} fontSize={"1em"} fontWeight={"bold"} colour={"brand.mainPurple"} />
                    <Paragraph content={event_location} fontSize={"0.9em"} fontWeight={"medium"} />
                </Stack>
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Box boxSize='200px' align="center">
                        <MainImage src={"https://i.ibb.co/4jBv2Fr/online-party-meeting-friends-people-keep-in-touch-using-video-call-on-laptop-vector-illustration.jpg"} alt={"image of friends meeting"} />
                    </Box>
                </Flex>
                <Box className="favourite">
                    <FaRegHeart className="fav--before" />
                    <FaHeart className="fav--after" />
                </Box>
            </Stack>
        </Center >
    );
}


