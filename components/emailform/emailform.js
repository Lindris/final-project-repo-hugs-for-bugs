import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SubHeader from "../headers/subheader";
import Paragraph from "../paragraph";
import MainButton from "../mainButton";
import {
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  FormControl,
  Input,
  Box,
  Textarea,
  Flex,
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

  const [input, setInput] = useState('')
  const handleInputChange = (e) => setInput(e.target.value)
  const isError = input === ''

  return (
    <>
      <Flex my="2em" flexDirection={"column"} alignItems="center">
        <SubHeader content={"Want to be a guest speaker?"} />
      </Flex>
      <Flex my="2em" flexDirection={"column"} alignItems="center" mx="1em">
        <Paragraph fontSize="1.4em" content={"If you'd like to share your experience, product or provide an insight into to your organisation then get in touch with us."} />
        <Paragraph fontSize="1.4em" content={"Our ethusiastic and talented community would love to hear from you."} />
      </Flex>
      <Center>
        <Box
          py={4}
          px={10}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          display="flex"
          mt={10}
        >
          <FormControl ref={form} onSubmit={sendEmail} isRequired >
            <FormLabel mt={4} width={{ sm: "100%", md: "300px", lg: "500px" }} >First Name</FormLabel>
            <Input name="firstname" />
            <FormLabel mt={4}>Last Name</FormLabel>
            <Input name="lastname" />
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input name="email" type="email" onChange={handleInputChange} isInvalid={isError} />
            <FormLabel mt={4}>Subject</FormLabel>
            <Input name="subject" />
            <FormLabel mt={4}>Message</FormLabel>
            <Textarea name="message" placeholder="Tell us more" />
            <Center py="2em">
              <MainButton content="Submit" route="/" />
            </Center>
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
        </Box>
      </Center>
    </>
  );
}
