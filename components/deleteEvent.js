import { Button, Box, Tooltip } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useUser } from "@auth0/nextjs-auth0";
import { API_URL } from "../config/index.js";
// import
// import { useState } from "react";
export default function DeleteEvent({ event_id, refreshData, setFormVisible }) {
  const { user } = useUser();
  async function removeEvent() {
    setFormVisible(false);
    if (!user) {
    } else if (user) {
      try {
        const response = await fetch(`${API_URL}/events`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            auth_id: user.sub,
            event_id: event_id,
          }),
        });
        if (response.status === 200) {
          refreshData();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Tooltip hasArrow label="Delete event" fontSize="md" placement="right">
      <Button
        onClick={removeEvent}
        bg="none"
        p={0}
        _hover={{
          textDecoration: "none",
          borderColor: "brand.primaryDark",
        }}
      >
        <Box
          bg="brand.secondaryPurple"
          px={".7em"}
          py={"0.3em"}
          borderRadius={"9px"}
        >
          <MdDelete size={30} color="white" />
        </Box>
      </Button>
    </Tooltip>
  );
}
