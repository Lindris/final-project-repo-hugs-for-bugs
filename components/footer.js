import {
  ButtonGroup,
  Container,
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

export default function Footer() {
  return (
    <Flex>
      <Container Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }} color="brand.quaternary">
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row" align="center">
            <Box>
              <h1>Logo</h1>
              </Box>
              <Spacer />
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
          </Stack>
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Co:llab, Inc. All rights
            reserved.
          </Text>
        </Stack>
      </Container>
    </Flex>
  );
}
