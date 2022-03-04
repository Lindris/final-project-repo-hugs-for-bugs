//copy card from chakra
//import card from chakra
//export default function,change image - pass down as props {content, heading}
//returning the jsx elements (react DOM elements)
//in heading tag, pass in {heading} under font and {content} under color
//position and size -  layout
// import Paragraph component and changing the Text component to now use our Paragraph component
// Add Paragraph component in last stack instead of Chakra's heading component to add headers to each info card
// Add Chakra's Image component above text and header in the second box to render an image with the src and alt passed down as props
//in last 2 paragraph tags, change hard coded text content to props with content={headerContent}  and {textContent}
//in index.js -
//center the infocard headers by putting alongside <Stack textAlign={center}

import Paragraph from "../paragraph.js";
import {
  Image,
  Box,
  Center,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function infoCard({ headerContent, textContent, src, alt }) {
  return (
    <Center py={4}>
      <Box
        fontFamily="Quicksand"
        bg={useColorModeValue("white", "gray.900")}
        maxWidth={"400px"}
        maxHeight={'auto'}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        mx={{
          sm: '1em', md: '1em', lg: "2em"
        }}
        w={{ sm: '100%', md: '100px', lg: "400px" }}
        h={{
          sm: 'auto', md: '100%'
        }}
      >
        <Box
          // bg={"gray.100"}
          mt={5}
          mx={-6}
          mb={6}
          pos={"relative"}
          align="center"
        >
          <Image mb={"-1em"} m={3} w={{ sm: '25%', md: '150px', lg: "100px" }}
            height={{
              sm: 'auto', md: 'auto'
            }} src={src} alt={alt} />
        </Box>
        <Stack textAlign={"center"}>
          <Paragraph
            p={"1"}
            colour={"brand.primaryDark"}
            fontWeight={"extrabold"}
            fontSize="2.3em"
            content={headerContent}
          ></Paragraph>
          <Paragraph content={textContent} />
        </Stack>
      </Box>
    </Center >
  );
}
