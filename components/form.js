import {
  // Form,
  Select,
  FormControl,
  FormLabel,
  Button,
  Input,
  Box,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
export default function CreateEventForm() {
  const [startDate, setStartDate] = useState(new Date());
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  function onSubmit(values, e) {
    console.log(values);
    e.target.reset();
    // send data to API
    // confirm with modal
    // clear the form fields
  }

  return (
    <Box p={12}>
      {/* event type */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="type">Event type</FormLabel>
        <Select
          placeholder="Select the type of event"
          {...register("Type", {
            required: "This is required",
            minLength: {
              value: 4,
              message: "Plase provide a link to your event",
            },
          })}
        >
          <option value="Hackathon">Hackathon</option>
          <option value="Code Club">Code Club</option>
        </Select>
        <FormLabel htmlFor="name">Description</FormLabel>
        <Input id="Description" {...register("title")} />
        <FormLabel htmlFor="Location">Meeting URL</FormLabel>
        <Input
          id="Location"
          {...register("Location", {
            required: "This is required",
            minLength: {
              value: 4,
              message: "Plase provide a link to your event",
            },
          })}
        />
        <FormLabel>Date</FormLabel>
        <Controller
          control={control}
          name="SingleDatepicker"
          render={({ field }) => (
            <SingleDatepicker
              placeholderText="Select date"
              onDateChange={(e) => field.onChange(e)}
              selected={field.value}
            />
          )}
        />
        {/* event duration */}
        <p> insert duration here</p>
        {/* tags  */}
        <FormLabel>
          <EditIcon /> Provide three tags to help describe your event
        </FormLabel>
        <Editable defaultValue="Tag 1" width="200px" {...register("Editable")}>
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Editable defaultValue="Tag 2" width="200px">
          <EditablePreview />
          <EditableInput {...register("EditableInput")} />
        </Editable>
        <Editable defaultValue="Tag 3" width="200px">
          <EditablePreview {...register("Editablep")} />
          <EditableInput />
        </Editable>
        <Button width="200px" mt={4} type="submit" isLoading={isSubmitting}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

{
  /* <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        /> */
}
