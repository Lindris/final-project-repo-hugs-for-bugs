import { Button, Box, Tooltip } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";

export default function EditEvent({ event_id, editEvent }) {
  return (
    <Tooltip hasArrow label="Edit event" fontSize="md" placement="right">
      <Button
        onClick={() => editEvent(event_id)}
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
          <MdEdit size={30} color="white" />
        </Box>
      </Button>
    </Tooltip>
  );
}
