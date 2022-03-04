import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SubHeader from "../headers/subheader";
import Paragraph from "../paragraph";
import ConfirmModal from "../confirmModal.js";
import { useState } from "react";

import {
	Button,
	FormLabel,
	FormControl,
	Input,
	Box,
	Textarea,
	Flex,
	Center,
	useDisclosure,
} from "@chakra-ui/react";

// import basic modal from components
// import useDisclosure from chakra
// destructure isOpen, onOpen, onClose from useDisclosure

export default function ContactUs() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [input, setInput] = useState("");
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		console.log(form.current);
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
					onOpen();
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	// function handleInputChange(e) {
	// 	setInput(e.target.value);
	// }

	// function onSubmit(e) {
	// 	const formValues = document.querySelector("form");
	// 	if (formValues.email.value || formValues.firstname.value === "") {
	// 		console.log("fill value");
	// 	} else {
	// 		;
	// 	}
	// }

	return (
		<>
			<Flex
				my="2em"
				flexDirection={"column"}
				alignItems="center"
				px={{ base: "2em" }}
			>
				<SubHeader content={"Want to be a guest speaker?"} />
			</Flex>
			<Flex
				my="2em"
				flexDirection={"column"}
				alignItems="center"
				px={{ base: "2em" }}
			>
				<Paragraph
					fontSize="1.4em"
					content={
						"If you'd like to share your experience, product or provide an insight into to your organisation then get in touch with us."
					}
				/>
				<Paragraph
					fontSize="1.4em"
					content={
						"Our ethusiastic and talented community would love to hear from you."
					}
				/>
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
					<form ref={form} onSubmit={sendEmail}>
						<FormLabel mt={4} width={{ sm: "100%", md: "300px", lg: "500px" }}>
							First Name
						</FormLabel>
						<Input name="firstname" isRequired />
						<FormLabel mt={4}>Last Name</FormLabel>
						<Input name="lastname" isRequired />
						<FormLabel mt={4} htmlFor="email">
							Email address
						</FormLabel>
						<Input name="email" type="email" isRequired />
						<FormLabel mt={4}>Subject</FormLabel>
						<Input name="subject" isRequired />
						<FormLabel mt={4}>Message</FormLabel>
						<Textarea name="message" placeholder="Tell us more" isRequired />
						<Center py="2em">
							<Button
								color="brand.primaryLight"
								bg="brand.mainPurple"
								borderRadius="25px"
								size="lg"
								letterSpacing="0.5px"
								fontFamily="Quicksand"
								_hover={{
									textDecoration: "none",
									bg: "brand.primaryDark",
								}}
								type="submit"
							>
								Submit
							</Button>
						</Center>
					</form>
					<ConfirmModal
						isOpen={isOpen}
						onClose={onClose}
						button1="Close"
						confirm_message={
							"Thank you for getting in touch with us. We will get back to you shortly."
						}
					/>
				</Box>
			</Center>
		</>
	);
}
