import {
  ButtonGroup,
  IconButton,
  Stack,
  Text,
  Flex,
  Spacer,
  Box
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
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row">
          <Box>
          <Text fontSize="1.1em" color='white'>Your Account</Text>
          <Text fontSize=".9em" color='lightgray'>Settings</Text>
          <Text fontSize=".9em" color='lightgray'>Log out</Text>
          <Text fontSize=".9em" color='lightgray'>Help</Text>
          </Box>
            
            <Spacer />
            <Box>
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
            </Box>
          </Stack>
          <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
          <Text fontSize=".9em" color="white">
            &copy; {new Date().getFullYear()} co:llab 
          </Text>
            <Text fontSize=".9em" color='lightgray'>Terms & Privacy</Text>
            <Text fontSize=".9em" color='lightgray'>Community Guidelines</Text>
            <Text fontSize=".9em" color='lightgray'>Cookie Policy</Text>
            <Text fontSize=".9em" color='lightgray'>Help</Text>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
}

