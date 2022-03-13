import React, { useState } from "react";
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
import Router from "next/router";
import BasicModal from "../modals/modal.js";
import { API_URL } from "../../config/index.js";
import { addDays } from "date-fns";
import { useCallback } from "react";

function toDate(dStr, format) {
  dStr = dStr.slice(0, 5);
  let now = new Date();
  if (format == "h:m") {
    now.setHours(dStr.substr(0, dStr.indexOf(":")));
    now.setMinutes(dStr.substr(dStr.indexOf(":") + 1));
    now.setSeconds(0);
    return now;
  } else return "Invalid Format";
}

export default function UpdateEventForm({ formVisible, eventDetails }) {
  const {
    event_date,
    event_desc,
    event_end_time,
    event_id,
    event_location,
    event_start_time,
    event_tags,
    event_type,
    first_name,
    last_name,
  } = eventDetails[0];

  let newDate = new Date(Date.parse(event_date));
  let newStartTime = toDate(event_start_time, "h:m");
  let newEndTime = toDate(event_end_time, "h:m");

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
    values = { ...values, event_id: event_id };
    setFormValues(values);
    onOpen();
  }

  const handleFormUpdate = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/events`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (response.status === 200) {
        setConfirmEvent("Event successfully updated.");
      }
    } catch (error) {
      setConfirmEvent("An error occurred, please try again.");
    }

    setTimeout(function () {
      Router.reload(window.location.pathname);
    }, 2000);
  }, [formValues]);

  return (
    <>
      <Box
        style={{ visibility: formVisible ? "visible" : "hidden" }}
        maxW={{ lg: "500px", md: "500px", sm: "500px" }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        m="0 auto"
        my={10}
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
        py={5}
        px={12}
      >
        <Box w="auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel htmlFor="first" mt={4}>
              First name
            </FormLabel>
            <Input
              id="First Name"
              defaultValue={first_name}
              {...register("first_name", {
                required: true,
              })}
              className="event-desc-input"
            />
            <FormLabel htmlFor="last" mt={4}>
              Last name
            </FormLabel>
            <Input
              defaultValue={last_name}
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
              defaultValue={event_type}
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
              defaultValue={event_desc}
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
              defaultValue={event_location}
              id="Location"
              {...register("event_location", {
                required: true,
              })}
              className="meeting-url-input"
            />
            <FormLabel mt={4}>Date</FormLabel>
            <Controller
              defaultValue={newDate}
              rules={{ required: true }}
              control={control}
              name="event_date"
              required="true"
              render={({ field }) => (
                <DatePicker
                  dateFormat="MMMM dd yyyy"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  className="date-input"
                  minDate={addDays(new Date(), 1)}
                />
              )}
            />
            <FormLabel mt={4}>Start Time</FormLabel>
            <Controller
              defaultValue={newStartTime}
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
              defaultValue={newEndTime}
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
            <FormLabel mt={3}>
              <EditIcon /> <b>Optional:</b> Three words to summarize your event
              <br />
              (max 15 characters)
            </FormLabel>
            <Editable
              defaultValue={event_tags[0]}
              width="200px"
              mt={2}
              placeholder="Tag 1"
            >
              <EditablePreview />
              <EditableInput
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
              defaultValue={event_tags[1]}
            >
              <EditablePreview />
              <EditableInput
                {...register("event_tags.1", {
                  maxLength: 15,
                })}
              />
            </Editable>
            <Editable
              placeholder="Tag 3"
              width="200px"
              mt={2}
              defaultValue={event_tags[2]}
            >
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
          button1="Continue editing"
          button2="Confirm changes"
          onClick={handleFormUpdate}
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
