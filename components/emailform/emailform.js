import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import MainButton from "../mainButton";
import {
  // Form,
  Select,
  FormLabel,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";
export const ContactUs = () => {
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
    <Box
      py={4}
      px={10}
      // pl={10}
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      m="0 auto"
      mt={10}
      // align="center"
    >
      {/* event type */}
      <form ref={form} onSubmit={sendEmail}>
        <FormLabel htmlFor="name" mt={4}>
          Name
        </FormLabel>
        <Input name="name" />
        <FormLabel htmlFor="type" mt={4}>
          Event type
        </FormLabel>
        <Select>
          <option value="Hackathon">Hackathon</option>
          <option value="Code Club">Code Club</option>
        </Select>
        <FormLabel htmlFor="email" mt={4}>
          Email
        </FormLabel>
        <Input name="email" type="email" />
        <FormLabel htmlFor="Message" mt={4}>
          Message
        </FormLabel>
        <Input name="message" />

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
          value="Send"
        ></Button>
      </form>
    </Box>
  );
};
