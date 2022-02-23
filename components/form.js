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

export default function CreateEventForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [startDate, setStartDate] = useState(new Date());
  const [eventdetails, setEventDetails] = useState([]);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  function onSubmit(values, e) {
    console.log(values);
    onOpen();
    const newValues = Object.keys(values).map((key) => {
      console.log(values[key]);
      if (key === "Date") {
        values[key] = values[key].toString().slice(0, 16);
      } else if (key === "Start time" || key === "End time") {
        values[key] = values[key].toString().slice(16, 25);
      }
    });

    const valuesArray = Object.entries(values);
    console.log(valuesArray);
    setEventDetails(valuesArray);
    // e.target.reset();
    // send data to API
    // confirm with modal
    // clear the form fields
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
            {...register("Type", {
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
            {...register("Description", {
              required: true,
            })}
          />
          <FormLabel htmlFor="Location" mt={4}>
            Meeting URL
          </FormLabel>
          <Input
            id="Location"
            {...register("Meeting URL", {
              required: true,
            })}
          />
          <FormLabel mt={4}>Date</FormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
            name="Date"
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
            name="Start time"
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
            name="End time"
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
            <EditableInput {...register("tag1")} />
          </Editable>
          <Editable defaultValue="Tag 2" width="200px" mt={2}>
            <EditablePreview />
            <EditableInput {...register("tag2")} />
          </Editable>
          <Editable defaultValue="Tag 3" width="200px" mt={2}>
            <EditablePreview />
            <EditableInput {...register("tag3")} />
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
                  {` :  ${item[1].toString()}`}
                </p>
              );
            })}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Edit details
            </Button>
            <Button variant="ghost">Confirm event</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
