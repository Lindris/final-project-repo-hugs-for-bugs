//copy card from chakra
//import card from chakra
//export default function,change image - pass down as props {content, heading}
//returning the jsx elements (react DOM elements) 
//in heading tag, pass in {heading} under font and {content} under color
//position and size -  layout
// import Paragraph component and changing the Text component to now use our Paragraph component
// Add Paragraph component in last stack instead of Chakra's heading component to add headers to each info card
// Add Chakra's Image component above text and header in the second box to render an image with the src and alt passed down as props

import Paragraph from "../paragraph.js";
import {
  Image,
  Box,
  Center,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

export default function infoCard({ headerContent, textContent, src, alt }) {
  return (
    <Center py={6}>
      <Box
        fontFamily="Quicksand"
        maxWidth={'max-content'}
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
          pos={'relative'}
          align="center"
        >
          <Image maxWidth={'inherit'} height="100%" src={src} alt={alt} />
        </Box>
        <Stack textAlign={"center"}>
          <Paragraph
            p={"1"}
            colour={"brand.primaryDark"}
            fontWeight={"extrabold"}
            fontSize="2.3em"
            content={headerContent}>
          </Paragraph>
          <Paragraph content={textContent}/>
        </Stack>
      </Box>
    </Center >
  );
}


