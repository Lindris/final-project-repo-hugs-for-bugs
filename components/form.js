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
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

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
    // e.target.reset();
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
          name="DatePicker"
          render={({ field }) => (
            <DatePicker
              dateFormat="MMMM d, yyyy"
              onChange={(e) => field.onChange(e)}
              selected={field.value}
            />
          )}
        />
        {/*start time range picker */}
        <FormLabel>Start Time</FormLabel>
        <section>
          <Controller
            control={control}
            name="StartTimeRange"
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
        </section>

        {/* end time range picker */}
        <FormLabel>End Time</FormLabel>
        <section>
          <Controller
            control={control}
            name="EndTimeRange"
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
        </section>
        {/* tags  */}
        <FormLabel>
          <EditIcon /> Provide three tags to help describe your event
        </FormLabel>
        <Editable defaultValue="Tag 1" width="200px">
          <EditablePreview />
          <EditableInput {...register("tag1")} />
        </Editable>
        <Editable defaultValue="Tag 2" width="200px">
          <EditablePreview />
          <EditableInput {...register("tag2")} />
        </Editable>
        <Editable defaultValue="Tag 3" width="200px">
          <EditablePreview />
          <EditableInput {...register("tag3")} />
        </Editable>
        <Button width="200px" mt={4} type="submit" isLoading={isSubmitting}>
          Submit
        </Button>
      </form>
    </Box>
  );
}
