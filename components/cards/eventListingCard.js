import { Stack, Box, HStack, Spacer } from '@chakra-ui/react';
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

export default function EventListingCard() {
    return (
        <Stack p="4" boxShadow="lg" borderRadius="sm">
            <HStack>
                <Box>
                    <Stack direction="column"
                        justifyContent={'space-between'}>
                        <Paragraph text={event_name} fontSize={"2em"} fontWeight={"bold"} />
                        <Paragraph text={event_date} fontSize={"1em"} fontWeight={"bold"} colour={"brand.mainPurple"} />
                        <Paragraph text={event_location} fontSize={"0.9em"} fontWeight={"medium"} />
                    </Stack>
                </Box>
                <Spacer />
                <Box maxW="300px">
                    <MainImage src={"https://i.ibb.co/4jBv2Fr/online-party-meeting-friends-people-keep-in-touch-using-video-call-on-laptop-vector-illustration.jpg"} alt={"image of friends meeting"} />
                </Box>
            </HStack>
        </Stack>
    );
}

