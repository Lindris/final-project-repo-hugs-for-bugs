import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SubHeader from "../headers/subheader";

import {
  // Form,

  FormLabel,
  Button,
  Input,
  Box,
  Textarea,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wuqdwm3",
        "template_0t019v8",
        form.current,
        "gZk2hVOs5f7LTb77V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="name" />
    //   <label>Email</label>
    //   <input type="email" name="email" />
    //   <label>Subject</label>
    //   <input type="subject" name="subject" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form><>
    <Center>
      <Box
        py={4}
        px={10}
        // pl={10}
        // maxW=""

        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        m="0 auto"
        mt={10}
        // align="center"
      >
        <form ref={form} onSubmit={sendEmail}>
          <Grid templateRows="repeat(1, 2fr)" templateColumns="repeat(1, 1fr)">
            <GridItem colStart={1} colEnd={3} rowStart={1}>
              <SubHeader content={"Want to be a guest speaker?"} />
            </GridItem>
            <GridItem colSpan={1} rowStart={2}>
              <FormLabel mt={4}>First Name</FormLabel>
              <Input name="firstname" />
              <FormLabel mt={4}>Last Name</FormLabel>
              <Input name="lastname" />
            </GridItem>
            <GridItem ml={1} colSpan={1} rowStart={2}>
              <FormLabel mt={4}>Subject</FormLabel>
              <Input name="subject" />
              <FormLabel mt={4}>Email</FormLabel>
              <Input name="email" type="email" />
            </GridItem>
            <GridItem colSpan={2}>
              <FormLabel mt={4}>Message</FormLabel>
              <Textarea name="message" placeholder="Tell us more" />
              <Center>
                <Button
                  color="brand.primaryLight"
                  bg="brand.mainPurple"
                  borderRadius="25px"
                  size="lg"
                  letterSpacing="0.5px"
                  fontFamily="Quicksand"
                  width="200px"
                  mt={4}
                  type="submit"
                >
                  Submit
                </Button>
              </Center>
            </GridItem>
          </Grid>
        </form>
      </Box>
    </Center>
  );
}
