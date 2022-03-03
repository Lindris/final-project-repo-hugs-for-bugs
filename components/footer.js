import {
  ButtonGroup,
  IconButton,
  Stack,
  Text,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

//import { Logo } from './Logo'
// const { SubMenu } = Menu;
//insert chakra footer code
//fix footer to bottom of pageBreakAfter:
//icons moved to right
//insert dummy logo
//make footer responsive, using flex direction
//in flex tag insert a Box with footer content, including copyright &copy, newDate, co:llab, your Account
//in last flex tab insert text tags with size and colour for text along bottom of footer e.g. Terms, guidelines, cookies 

export default function Footer() {
  return (
    <Flex fontFamily="Quicksand">
      <Box bg="brand.primaryDark" w="100%" color="brand.primaryLight" p="5">
        <Flex direction={{ base: "column", sm: "column", md: "row", lg: "row" }}>
          <Box mr={{ base: "0em", sm: "1em", md: "4em", lg: "10em" }}>
            <Flex justify="space-between" direction="column">
              <Box my="1em">
                <Text fontWeight="bold" fontSize="1.1em" color='white'>Your Account</Text>
              </Box>
              <Box my="1em">
                <Text fontSize=".9em" color='lightgray'>Settings</Text>
                <Text fontSize=".9em" color='lightgray'>Log out</Text>
                <Text fontSize=".9em" color='lightgray'>Help</Text>
                <Text fontSize=".9em" color='lightgray'>Contact</Text>
              </Box>
              <Spacer />
            </Flex>
          </Box>
          <Box mr={{ base: "0em", sm: "1em", md: "5em", lg: "10em" }}>
            <Flex justify="space-between" direction="column">
              <Box my="1em">
                <Text fontWeight="bold" fontSize="1.1em" color='white'>Discover</Text>
              </Box>
              <Box my="1em">
                <Text fontSize=".9em" color='lightgray'>Topics</Text>
                <Text fontSize=".9em" color='lightgray'>Groups</Text>
                <Text fontSize=".9em" color='lightgray'>Learn</Text>
                <Text fontSize=".9em" color='lightgray'>Speakers</Text>
              </Box>
              <Spacer />
            </Flex>
          </Box>
          <Box mr={{ base: "0em", sm: "1em", md: "5em", lg: "10em" }}>
            <Flex justify="space-between" direction="column">
              <Box my="1em">
                <Text fontWeight="bold" fontSize="1.1em" color='white'>&#x7b;co:llab&#x7d;</Text>
              </Box>
              <Box my="1em">
                <Text fontSize=".9em" color='lightgray'>About us</Text>
                <Text fontSize=".9em" color='lightgray'>Ethos</Text>
                <Text fontSize=".9em" color='lightgray'>Careers</Text>
                <Text fontSize=".9em" color='lightgray'>Apps</Text>
              </Box>
              <Spacer />
            </Flex>
          </Box>
        </Flex >
        <Flex direction={{ base: 'column', md: 'row' }} gap={4} mt="2em">
          <Flex grow="1">
            <Text fontSize={{ base: ".5em", sm: ".5em", lg: ".9em" }} color="white" mr="2em">
              &copy; {new Date().getFullYear()} co:llab
            </Text>
            <Text fontSize={{ base: ".5em", sm: ".6em", lg: ".9em" }} color='lightgray' pr="2em">Terms & Privacy</Text>
            <Text fontSize={{ base: ".5em", sm: ".6em", lg: ".9em" }} color='lightgray' pr="2em">Community Guidelines</Text>
            <Text fontSize={{ base: ".5em", sm: ".6em", lg: ".9em" }} color='lightgray' pr="2em">Cookie Policy</Text>
            <Text fontSize={{ base: ".5em", sm: ".6em", lg: ".9em" }} color='lightgray' pr="2em">Help</Text>
          </Flex>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Flex>
      </Box >
    </Flex >
  );
}