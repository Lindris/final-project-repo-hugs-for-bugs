import React, { useState } from "react";
import {
  // Form,
  Select,
  FormLabel,
  Button,
  Input,
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0";
import Router from "next/router";

export default function CreateEventForm() {
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [startDate, setStartDate] = useState(new Date());
  const [eventdetails, setEventDetails] = useState([]);
  const [formValues, setFormValues] = useState("");
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  function onSubmit(values, e) {
    Object.keys(values).map((key) => {
      if (key === "event_date") {
        values[key] = values[key].toString().slice(0, 15);
      } else if (key === "event_start_time" || key === "event_end_time") {
        values[key] = values[key].toString().slice(16, 24);
      }
    });
    console.log(values);
    const valuesArray = Object.entries(values);
    setEventDetails(valuesArray);
    console.log(user);
    values = { ...values, auth_id: user.sub };
    console.log(values);
    setFormValues(values);
    onOpen();
  }

  function handleModalSubmit() {
    console.log(formValues);
    axios.post("http://localhost:5000/events", formValues).then((response) => {
      console.log("New Event Created");
      Router.reload(window.location.pathname);
    });
  }

  return (
    <>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLabel htmlFor="type" mt={4}>
            Event type
          </FormLabel>
          <Select
            placeholder="Select the type of event"
            {...register("event_type", {
              required: true,
            })}
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
          />
          <FormLabel htmlFor="Location" mt={4}>
            Meeting URL
          </FormLabel>
          <Input
            id="Location"
            {...register("event_location", {
              required: true,
            })}
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
              />
            )}
          />

          {/*start time range picker */}
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
              />
            )}
          />

          {/* end time range picker */}
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
              />
            )}
          />

          {/* tags  */}
          <FormLabel mt={2}>
            <EditIcon /> Provide three tags to help describe your event
          </FormLabel>
          <Editable defaultValue="Tag 1" width="200px" mt={2}>
            <EditablePreview />
            <EditableInput {...register("event_tags.0")} />
          </Editable>
          <Editable defaultValue="Tag 2" width="200px" mt={2}>
            <EditablePreview />
            <EditableInput {...register("event_tags.1")} />
          </Editable>
          <Editable defaultValue="Tag 3" width="200px" mt={2}>
            <EditablePreview />
            <EditableInput {...register("event_tags.2")} />
          </Editable>
          <Button width="200px" mt={4} type="submit" isLoading={isSubmitting}>
            Submit
          </Button>
        </form>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {eventdetails.map((item, i) => {
              return (
                <p>
                  <b>{`${item[0]}`}</b>
                  {` :  ${item[1]}`}
                </p>
              );
            })}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Edit details
            </Button>
            <Button variant="ghost" onClick={handleModalSubmit}>
              Confirm event
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// limit description length (discuss length)
