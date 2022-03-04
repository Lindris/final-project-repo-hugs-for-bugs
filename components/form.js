import React, { useState } from "react";
import {
  Select,
  FormLabel,
  Button,
  Input,
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
import SecondaryButton from "./secondaryButton.js";
import { useUser } from "@auth0/nextjs-auth0";
import Router from "next/router";
import BasicModal from "../components/modal.js";
import SubHeader from "./headers/subheader.js";
export default function CreateEventForm() {
  const { user } = useUser();
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
    try {
      const response = await fetch("http://localhost:5000/events", {
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
      <Box m="0 auto" textAlign={"center"} py={5}>
        <SubHeader
          align="center"
          content={`${username}, create your own event here!`}
        />
      </Box>
      <Box
        py={10}
        px={10}
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        m="0 auto"
        my={10}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLabel htmlFor="type" mt={4}>
            Event type
          </FormLabel>
          <Select
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
          <Input
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
            id="Location"
            {...register("event_location", {
              required: true,
            })}
            className="meeting-url-input"
          />
          <FormLabel mt={4}>Date</FormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
            name="event_date"
            required="true"
            render={({ field }) => (
              <DatePicker
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
          <FormLabel mt={2}>
            <EditIcon /> Provide three tags to help describe your event
          </FormLabel>
          <Editable width="200px" mt={2} placeholder="Tag 1">
            <EditablePreview />
            <EditableInput
              {...register("event_tags.0")}
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
            <EditableInput {...register("event_tags.1")} />
          </Editable>
          <Editable placeholder="Tag 3" width="200px" mt={2}>
            <EditablePreview className="tag-3-input" />
            <EditableInput {...register("event_tags.2")} />
          </Editable>
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
            mt={4}
            type="submit"
            isLoading={isSubmitting}
            className="submit-event-btn"
          >
            Submit
          </Button>
        </form>
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

