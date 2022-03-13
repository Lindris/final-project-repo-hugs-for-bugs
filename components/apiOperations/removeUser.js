import { Button, Box, Tooltip } from "@chakra-ui/react";
import { MdPersonRemove } from "react-icons/md";
import { useUser } from "@auth0/nextjs-auth0";
import { API_URL } from "../../config/index.js";
import { useCallback } from "react";

export default function RemoveUser({ event_id, refreshData }) {
  const { user } = useUser();
  const removeUserFromEvent = useCallback(async () => {
    if (!user) {
      //  thnk about what should be done here
    } else if (user) {
      try {
        const response = await fetch(`${API_URL}/users`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            auth_id: user.sub,
            event_attend: event_id,
          }),
        });
        if (response.status === 200) {
          refreshData();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [event_id]);

  return (
    <Tooltip hasArrow label="Leave event" fontSize="md" placement="right">
      <Button
        onClick={removeUserFromEvent}
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
          borderRadius={"7px"}
        >
          <MdPersonRemove size={30} color="white" />
        </Box>
      </Button>
    </Tooltip>
  );
}
