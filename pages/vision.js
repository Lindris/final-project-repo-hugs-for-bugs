import MainImage from "../components/mainImage";
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

//import chakra - done
//Reuse components - header, subheaders = our vision, our story, our ethos, with paragraphs
//images logos - SoC and Co:llab
//row for header - Strapline  - collaborating image?
//row for Vision - image logo on left
//row for Story - log soc on right:
//Row for ethos - no image?

//create gridItem with 4 rows and 2 columns - first row spans 2 columns
//In grid put inside flex with box inside
// function Vision returning Grid with templateRows and columns
//Grid item specify what rows columns spanning colSpan={2} for 2 columns
//grid item for 2nd and 3rd rows - e.g. rowSpan{3} is the 3rd row
//insert text and image content inside the boxes
//use styling

export default function Vision() {
  return (
    <Grid
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(2, 1fr)"
      border="solid 1px purple"
    >
      <GridItem colSpan={2}>
        <Flex>
          <SubHeader
            content={"Helping programmers grow and collaborate together"}
          />
        </Flex>
      </GridItem>
      <GridItem colSpan={2} rowSpan={2} border="solid 1px orange">
        <Flex>
          <Box>
            <Paragraph
              content={"Our vision"}
              fontSize={"2.5em"}
              fontWeight={"bold"}
            />
            <Paragraph
              content={
                "The world of software development is a path littered with obstacles. Navigating the tangled web of coding within a collaborative community is good for  coders and the people we are coding for. We know that sharing experience, problems and learning means better end products for users."
              }
              fontSize={"1.4em"}
            />
          </Box>
        </Flex>
      </GridItem>
      <GridItem colSpan={2} rowSpan={3} border='solid 1px green'>
        <Flex>
          <Box>
            <Paragraph
              content={'Our Story'}
              fontSize={'2.5em'}
              fontWeight={'bold'}
            />
            <Paragraph content={"As SoC Bootcamp graduates, in a very short time we\'ve come a very long way, from Zero to Programmer. Our journey has been one of the hardest we\'ve ever travelled. Climbing this intensive learning curve has been hugely challenging."} fontSize={'1.4em'} />
            <Paragraph content={`Mainly we’ve realised that our supportive community is hugely valuable. Coding with others is so much more fun and really helps manage the intensity.`}
              fontSize={'1.4em'} />

            <Paragraph content={`Now we’re moving onto the next stage in our developer careers, we’ve created this site to continue mutually sharing our experience and learning.  The Co:llab space lets us collaborate with others in a space for growing each other through shared experiences with pair programming and team working`}
              fontSize={'1.4em'}
            />
          </Box>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex>
          <Box>

          </Box>
        </Flex>
      </GridItem>

    </Grid>
  );
}
