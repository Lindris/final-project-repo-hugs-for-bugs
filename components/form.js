import { FormControl, FormLabel, Button, Input } from "@chakra-ui/react";
import { Formik } from "formik";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateEventForm() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Formik
        initialValues={{
          event_name: "",
          event_description: "",
          location: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      ></Formik>
      <FormControl isRequired>
        {/* event type */}
        <Button colorScheme="teal">Code Collab</Button>{" "}
        <Button colorScheme="teal">Hackathon</Button>
        {/* event title */}
        <FormLabel htmlFor="title">Event Title</FormLabel>
        <Input id="title" placeholder="First name" />
        {/* event location */}
        <FormLabel htmlFor="location">Event Location</FormLabel>
        <Input id="location" placeholder="First name" />
        {/* calander */}
        <FormLabel htmlFor="date">Event Date</FormLabel>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        {/* event duration */}
        <p> insert event length here</p>
        {/* tags  */}
        <Button colorScheme="blue">tag1</Button>{" "}
        <Button colorScheme="blue">tag2</Button>{" "}
        <Button colorScheme="blue">tag3</Button>
      </FormControl>
    </>
  );
}
