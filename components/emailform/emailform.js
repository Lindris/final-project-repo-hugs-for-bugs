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
					onOpen();
				},
				(error) => { }
			);
		e.target.reset();
	};

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
						"Would you like to speak at one of our events? Our guest events are an opportunity to get in front of our enthusiastic and talented programmer audience."}

				/>
				<Paragraph
					fontSize="1.4em"
					content={
						"Get in touch as an industry expert and showcase a product, share insights into why you do what you do, or run a Q&A session."
					}
				/>
				<Paragraph
					fontSize="1.4em"
					content={
						"Please let us know who you are, your organisation, what you would like to share and we’ll get back to you as soon as we can."
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
						<FormLabel for="firstname" mt={4} width={{ sm: "100%", md: "300px", lg: "500px" }}>
							First Name
						</FormLabel>
						<Input name="firstname" isRequired id="firstname" />
						<FormLabel for="lastname" mt={4}>Last Name</FormLabel>
						<Input name="lastname" id="lastname" isRequired className="lastname" />
						<FormLabel for="email" mt={4} htmlFor="email">
							Email address
						</FormLabel>
						<Input name="email" id="email" type="email" isRequired className="email" />
						<FormLabel for="subject" mt={4}>Subject</FormLabel>
						<Input name="subject" id="subject" isRequired className="subject" />
						<FormLabel mt={4}>Message</FormLabel>
						<Textarea
							name="message"
							placeholder="Tell us more"
							isRequired
							className="message"
						/>
						<Center py="2em">
							<Button
								color="brand.primaryLight"
								bg="brand.mainPurple"
								borderRadius="25px"
								size="lg"
								letterSpacing="0.5px"
								_hover={{
									textDecoration: "none",
									bg: "brand.primaryDark",
								}}
								type="submit"
								button="submit-email-form"
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
