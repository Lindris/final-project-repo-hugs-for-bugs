//copy card from chakra
//import card from chakra
//export default function,change image - pass down as props {content, heading}
//returning the jsx elements (react DOM elements) 
//in heading tag, pass in {heading} under font and {content} under color
//position and size -  layout
// import Paragraph component and changing the Text component to now use our Paragraph component

import Paragraph from "../paragraph.js";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

export default function infoCard({ header, content }) {
  return (
    <Center py={6}>
      <Box
        fontFamily="Quicksand"
        maxWidth={'350px'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        margin="3em"
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {header}
          </Heading>
          <Paragraph text={content }/>
        </Stack>
      </Box>
    </Center>
  );
}