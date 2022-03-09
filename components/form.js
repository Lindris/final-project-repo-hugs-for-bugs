import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import {
  Flex,
  Select,
  FormLabel,
  Button,
  Input,
  Textarea,
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useUser } from "@auth0/nextjs-auth0";
import Router from "next/router";
import BasicModal from "../components/modal.js";
import SubHeader from "./headers/subheader.js";
import Paragraph from "../components/paragraph.js";
import { API_URL } from "../config/index.js";
import MainImage from "../components/mainImage.js";

export default function CreateEventForm() {
  const { user } = useUser();
  const form = useRef();

  let username;
  if (user) {
    if ("given_name" in user) {
      username = user.given_name;
    } else username = user.nickname;
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [eventdetails, setEventDetails] = useState([]);
  const [formValues, setFormValues] = useState("");
  const [confirmEvent, setConfirmEvent] = useState("");
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values, e) {
    emailjs.sendForm(
      "service_wuqdwm3",
      "template_unqvmuh",
      form.current,
      "gZk2hVOs5f7LTb77V"
    );
    Object.keys(values).map((key) => {
      if (key === "event_date") {
        values[key] = values[key].toString().slice(0, 15);
      } else if (key === "event_start_time" || key === "event_end_time") {
        values[key] = values[key].toString().slice(16, 24);
      }
    });
    const valuesArray = Object.entries(values);
    setEventDetails(valuesArray);
    values = { ...values, auth_id: user.sub };
    setFormValues(values);
    onOpen();
  }

  async function handleModalSubmit() {
    // emailjs.sendForm(
    //   "service_wuqdwm3",
    //   "template_unqvmuh",
    //   form.current,
    //   "gZk2hVOs5f7LTb77V"
    // );
    try {
      const response = await fetch(`${API_URL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (response.status === 200) {
        setConfirmEvent("Event successfully added");
      }
    } catch (error) {
      setConfirmEvent("An error occurred, please try again");
    }

    setTimeout(function () {
      Router.reload(window.location.pathname);
    }, 2000);
  }
  return (
    <>
      <Box
        maxW={{ lg: "1200px" }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        m="0 auto"
        my={10}
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        gap={10}
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      >
        <Flex
          w={{ base: "100%", sm: "100%", md: "50%" }}
          flexDirection="column"
          justifyContent={"flex-end"}
          alignItems={"center"}
          bg={"rgba(158, 137, 241, 0.25)"}
        >
          <Box w="80%">
            <MainImage src={"https://i.ibb.co/NW9nTfJ/New-Project-14.png"} />
          </Box>
        </Flex>
        <Box py={5} px={10} maxW={{ lg: "600px" }} w="auto">
          <Box m="0 auto" textAlign={"center"} py={5}>
            <Paragraph
              align="center"
              fontSize="1.8em"
              fontWeight="bold"
              content={`${username}, create your own event here!`}
            />
          </Box>
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <FormLabel htmlFor="first" mt={4}>
              First name
            </FormLabel>
            <Input
              name="first_name"
              id="First Name"
              {...register("first_name", {
                required: true,
              })}
              className="event-desc-input"
            />
            <FormLabel htmlFor="last" mt={4}>
              Last name
            </FormLabel>
            <Input
              name="last_name"
              id="Last Name"
              {...register("last_name", {
                required: true,
              })}
              className="event-desc-input"
            />

            <FormLabel htmlFor="type" mt={4}>
              Event type
            </FormLabel>
            <Select
              name="event_type"
              placeholder="Select the type of event"
              {...register("event_type", {
                required: true,
              })}
              className="event-type-selector"
            >
              <option value="Hackathon">Hackathon</option>
              <option value="Code Club">Code Club</option>
            </Select>
            <FormLabel htmlFor="name" mt={4}>
              Description
            </FormLabel>
            <Textarea
              name="event_desc"
              placeholder="Tell us more"
              id="Description"
              {...register("event_desc", {
                required: true,
              })}
              className="event-desc-input"
            />
            <FormLabel htmlFor="Location" mt={4}>
              Meeting URL
            </FormLabel>
            <Input
              name="event_location"
              id="Location"
              {...register("event_location", {
                required: true,
              })}
              className="meeting-url-input"
            />
            <FormLabel htmlFor="email" mt={4}>
              Email
            </FormLabel>
            <Input
              placeholder="This will be kept private"
              type="email"
              name="email"
            />
            <FormLabel mt={4}>Date</FormLabel>
            <Controller
              rules={{ required: true }}
              control={control}
              name="event_date"
              required="true"
              render={({ field }) => (
                <DatePicker
                  name="date"
                  dateFormat="MMMM d yyyy"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  className="date-input"
                />
              )}
            />
            <FormLabel mt={4}>Start Time</FormLabel>
            <Controller
              rules={{ required: true }}
              control={control}
              name="event_start_time"
              render={({ field }) => (
                <DatePicker
                  name="starttime"
                  selected={field.value}
                  onChange={(e) => field.onChange(e)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="start-time-input"
                />
              )}
            />
            <FormLabel mt={4}>End Time</FormLabel>
            <Controller
              rules={{ required: true }}
              control={control}
              name="event_end_time"
              render={({ field }) => (
                <DatePicker
                  name="endtime"
                  selected={field.value}
                  onChange={(e) => field.onChange(e)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className="end-time-input"
                />
              )}
            />
            <FormLabel mt={3}>
              <EditIcon /> <b>Optional:</b> Three words to summarize your event
              <br />
              (max 15 characters)
            </FormLabel>
            <Editable width="200px" mt={2} placeholder="Tag 1">
              <EditablePreview />
              <EditableInput
                name="event_tags.0"
                {...register("event_tags.0", {
                  maxLength: 15,
                })}
                className="tag-1-input"
              />
            </Editable>
            <Editable
              placeholder="Tag 2"
              width="200px"
              mt={2}
              className="tag-2-input"
            >
              <EditablePreview />
              <EditableInput
                name="event_tags.1"
                {...register("event_tags.1", {
                  maxLength: 15,
                })}
              />
            </Editable>
            <Editable placeholder="Tag 3" width="200px" mt={2}>
              <EditablePreview className="tag-3-input" />
              <EditableInput
                {...register("event_tags.2", {
                  maxLength: 15,
                })}
              />
            </Editable>

            <Box
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              my={1}
            >
              <Button
                bg="brand.primaryLight"
                color="brand.mainPurple"
                borderRadius="25px"
                letterSpacing="0.5px"
                border="1px"
                borderColor="brand.mainPurple"
                _hover={{
                  textDecoration: "none",
                  color: "brand.primaryDark",
                  borderColor: "brand.primaryDark",
                }}
                width="100px"
                type="submit"
                isLoading={isSubmitting}
                className="submit-event-btn"
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      {formValues ? (
        <BasicModal
          isOpen={isOpen}
          onClose={onClose}
          button1="Edit details"
          button2="Confirm event"
          onClick={handleModalSubmit}
          event_date={formValues.event_date}
          event_type={formValues.event_type}
          event_desc={formValues.event_desc}
          event_start_time={formValues.event_start_time}
          event_end_time={formValues.event_end_time}
          event_location={formValues.event_location}
          event_tags={formValues.event_tags}
          confirm={confirmEvent}
        />
      ) : (
        <></>
      )}
    </>
  );
}
