import MainImage from "../components/mainImage";
import Header from "../components/headers/header";
import SubHeader from "../components/headers/subheader";
import Paragraph from "../components/paragraph";

import {
  Flex,
  Box,
  Image,
  List,
  ListItem,
  UnorderedList,
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
// Put each component in a box and apply flex properties to the flex container they are within > align center and justify content center
// Added a placeholder image to the second column of the second row in its own box

const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function Vision() {
  return (
    <>
      <Flex justifyContent="center" my="3em">
        <Box p="1em">
          <SubHeader
            content={"Helping programmers grow and collaborate together."}
          />
        </Box>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} justifyContent={"center"}>
        <Flex
          w={{ sm: "100%", md: "50%" }}
          height={{
            sm: "auto",
            md: "auto",
          }}
          direction={"column"}
          justifyContent={"center"}
          padding={4}
          my="2em"
          className="fadeUpAnimation"
        >
          <SubHeader content={"Our vision"} />
          <Box mt="2em" >
            <Paragraph
              content={
                "The world of software development is a path littered with obstacles. Navigating the tangled web of coding within a collaborative community is good for coders and also for the people we are coding for. Our vision in creating Co:llab is to create opportunities to continue our journey - working through problems together, learning from each other and industry experts, which will ultimately lead to developing better end products for users."
              }
            />
          </Box>
        </Flex>
        <Flex>
          <Box
            px="1em"
            my="2em"
            height={"auto"}
            width={["100%", "50%", "75%", "350px"]}
          >
            {/* <Box>
              <MainImage
                src="https://i.ibb.co/WD9rHDW/Wavy-Bus-32-Single-05.jpg"
                alt="online-party-meeting-friends-people-are-talking-through-a-laptop-at-home-vector-illustration"
              />
            </Box> */}
          </Box>
        </Flex>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} justifyContent="center">
        <Flex>
          <Box
            px="1em"
            my="2em"
            height={"auto"}
            width={["100%", "50%", "75%", "350px"]}
          >
            <Box>
              <MainImage
                src="https://i.ibb.co/WD9rHDW/Wavy-Bus-32-Single-05.jpg"
                alt="online-party-meeting-friends-people-are-talking-through-a-laptop-at-home-vector-illustration"
              />
            </Box>
          </Box>
        </Flex>
        <Flex
          w={{ sm: "100%", md: "50%" }}
          height={{
            sm: "auto",
            md: "auto",
          }}
          direction={"column"}
          justifyContent={"center"}
          padding={4}
          my="2em"
          className="fadeUpAnimation"
        >
          <SubHeader content={"Our story"} />
          <Flex direction={"column"} my="1em">
            <Box mt="1em">
              <Paragraph
                content={
                  "As School of Code Bootcamp Graduates, in a very short time we’ve come a very long way, from 'Zero to Programmer'. Our journey has been one of the hardest we’ve ever travelled and climbing this intensive learning curve has been hugely challenging."
                }
              />
            </Box>
            <Box my="1.2em">
              <Paragraph
                content={
                  "Mainly we’ve realised that our supportive community is immensely valuable. Coding with others is so much more fun and makes it much easier to manage the intensity."
                }
              />
            </Box>
            <Box>
              <Paragraph
                content={
                  "Now we’re moving onto the next stage in our developer careers, we’ve created this site to continue mutually sharing our programming experience. The Co:llab space gives us a platform to keep doing what we've come to value - working in tandem, practising with each other through pair programming and team working to keep learning and growing."
                }
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} justifyContent="center">
        <Flex
          w={{ sm: "100%", md: "50%" }}
          height={{
            sm: "auto",
            md: "auto",
          }}
          direction={"column"}
          justifyContent={"center"}
          padding={4}
          my="2em"
          className="fadeUpAnimation"
        >
          <SubHeader content={"Our ethos"} />
          <Flex direction={"column"} my="1em">
            <Box mt="1em">
              <Paragraph
                content={
                  "Our aspiration to make a change in the world of programming through creating better opportunities to code collaboratively with like-minded people, we are confident in sharing our community manifesto - we know it works and want to engage others in it."
                }
              />
            </Box>
            <Box my="1.2em">
              <Paragraph
                content={
                  "To make our space as open and welcoming as possible we set out our culture and values. Embracing our ethos is an essential requirement of community membership."
                }
              />
            </Box>
            <Box>
              <Paragraph
                content={
                  "Our ethos is enveloped in our Manifesto:-"
                }
              />
            </Box>
            <Box>
              <UnorderedList>
                <ListItem>being friendly and welcoming when collaboratively programming and solving problems with others
                </ListItem>
                <ListItem>being respectful and understanding towards everyone in the community and visiting guests</ListItem>
                <ListItem>making sure everyone is heard and has the opportunity to share</ListItem>
                <ListItem>being suportive and patient towards others - appreciating the premise that everyone is doing the best they can within their unique cabilities and constraints</ListItem>
                <ListItem>being positive and constructive - not critical - so everyone feels safe to speak openly </ListItem>
              </UnorderedList>
            </Box>
            <Box my="1.2em">
              <Paragraph
                content={
                  "We hope our manifesto is appreciated and resonates with all our members. Keeping our shared values in mind at all times will ensure a safe, fun and productive community experience. "
                }
              />
            </Box>
          </Flex>
        </Flex>
        <Flex>
          <Box
            px="1em"
            my="2em"
            height={"auto"}
            width={["100%", "50%", "75%", "350px"]}
          >
            <Box>
              <MainImage
                src="https://i.ibb.co/6D4LPvL/Wavy-Bus-32-Single-11.jpg"
                alt="online-party-meeting-friends-people-are-talking-through-a-laptop-at-home-vector-illustration"
              />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

// export default function Vision() {
//   return (
//         <Flex padding="1em" height="100%" flexDirection="column" alignItems="center" justifyContent="center">
//           <Box>
//             <SubHeader
//               content={"Helping programmers grow and collaborate together."}
//             />
//           </Box>
//         </Flex>
//         <Flex padding="1em" height="100%" flexDirection="row" alignItems={"flex-start"} justifyContent="center">
//             <Box>
//               <Box mb="1em">
//                 <Paragraph
//                   content={"Our vision"}
//                   fontSize={"2.5em"}
//                   fontWeight={"bold"}
//                 />
//               </Box>
//               <Box>
//                 <Paragraph
//                   content={
//                     "The world of software development is a path littered with obstacles. Navigating the tangled web of coding within a collaborative community is good for  coders and the people we are coding for. We know that sharing experience, problems and learning means better end products for users."
//                   }
//                   fontSize={"1.4em"}
//                 />
//               </Box>
//             </Box>
//           </HStack>
//         </Flex>
//       </GridItem>
//       <GridItem colSpan={1}>
//         <Flex padding="1em" height="100%" flexDirection="column" alignItems="center" justifyContent="center">
//           <Box>
//             <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/500x400' />
//           </Box>
//         </Flex>
//       </GridItem>
//       <GridItem colSpan={2}>
//         <Flex padding="1em" height="100%" flexDirection="column" alignItems={"flex-start"} justifyContent="center">
//           <Box mb="1em">
//             <Paragraph
//               content={'Our story'}
//               fontSize={'2.5em'}
//               fontWeight={'bold'}
//             />
//           </Box>
//           <Box>
//             <Paragraph content={"As SoC Bootcamp graduates, in a very short time we\'ve come a very long way, from Zero to Programmer. Our journey has been one of the hardest we\'ve ever travelled. Climbing this intensive learning curve has been hugely challenging."} fontSize={'1.4em'} />
//           </Box>
//           <Box>
//             <Paragraph content={`Mainly we’ve realised that our supportive community is hugely valuable. Coding with others is so much more fun and really helps manage the intensity.`}
//               fontSize={'1.4em'} />
//           </Box>
//           <Box>
//             <Paragraph content={`Now we’re moving onto the next stage in our developer careers, we’ve created this site to continue mutually sharing our experience and learning.  The Co:llab space lets us collaborate with others in a space for growing each other through shared experiences with pair programming and team working.`}
//               fontSize={'1.4em'}
//             />
//           </Box>
//         </Flex>
//       </GridItem>
//       <GridItem colSpan={2}>
//         <Flex padding="1em" height="100%" flexDirection="column" alignItems={"flex-start"} justifyContent="center">
//           <Box>
//             <Box mb="1em">
//               <Paragraph content={'Our ethos'}
//                 fontSize={'2.5em'}
//                 fontWeight={'bold'}
//               />
//             </Box>
//             <Box>
//               <Paragraph content={"Make a change in the world of programming. We’re confident in it and know it works - want to engage others in it."}
//                 fontSize={'1.4em'}
//               />
//             </Box>
//           </Box >
//         </Flex >
//       </GridItem >
//     </Grid >

//   );
// }
