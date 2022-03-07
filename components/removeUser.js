import { Button } from "@chakra-ui/react";
import { MdPersonRemove } from "react-icons/md";
import { useUser } from "@auth0/nextjs-auth0";
import { API_URL } from "../config/index.js";
import { useState } from "react";
export default function RemoveUser({ event_id, refreshData }) {
  console.log(refreshData);
  const [disable, setdisabled] = useState(false);
  const { user } = useUser();
  async function removeUserFromEvent() {
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
          setdisabled(true);
          refreshData();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Button
      isDisabled={disable}
      onClick={removeUserFromEvent}
      bg="none"
      p={0}
      _hover={{
        textDecoration: "none",
        borderColor: "brand.primaryDark",
      }}
    >
      <MdPersonRemove size={30} />
    </Button>
  );
}
