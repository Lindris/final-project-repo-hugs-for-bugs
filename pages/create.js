import CreateEventForm from "../components/form.js";
import { useUser } from "@auth0/nextjs-auth0";

import { Center } from "@chakra-ui/react";

export default function Create() {
  return (
    <>
      <CreateEventForm />
    </>
  );
}
