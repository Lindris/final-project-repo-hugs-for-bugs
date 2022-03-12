import { Box, Tag, Wrap, WrapItem } from "@chakra-ui/react";
import RemoveUser from "../apiOperations/removeUser.js";
import Paragraph from "../paragraph.js";
import DeleteEvent from "../apiOperations/deleteEvent.js";
import UpdateEvent from "../apiOperations/updateEvent.js";

export default function EventDetailsBox({
  event_type,
  event_date,
  event_start_time,
  event_end_time,
  event_desc,
  event_location,
  event_tags,
  event_id,
  removeUser,
  refreshData,
  first_name,
  last_name,
  removeEvent,
  setFormVisible,
  editEvent,
}) {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      maxWidth="300px"
      minWidth="400px"
      minHeight="300px"
    >
      <Paragraph
        content={`${event_type} by ${first_name} ${last_name}`}
        fontSize={"1.2em"}
        fontWeight={"bold"}
      />

      <Paragraph
        content={new Date(event_date).toString().slice(0, 15)}
        fontSize={"1em"}
        fontWeight={"bold"}
        colour={"brand.mainPurple"}
      />

      <Paragraph
        content={`${event_start_time.slice(0, 5)} - ${event_end_time.slice(
          0,
          5
        )}`}
        fontSize={"1em"}
        fontWeight={"bold"}
      />

      <Paragraph content={event_desc} fontSize={"1em"} fontWeight={"medium"} />
      <Paragraph
        content={event_location}
        fontSize={"1em"}
        fontWeight={"medium"}
      />

      <Wrap py={3}>
        {event_tags.map((tag) =>
          tag !== "" ? (
            <WrapItem>
              <Tag
                size={"md"}
                key={tag}
                variant="solid"
                bgColor={"brand.secondaryPurple"}
              >
                {tag}
              </Tag>
            </WrapItem>
          ) : (
            <></>
          )
        )}
      </Wrap>

      {removeUser ? (
        <RemoveUser event_id={event_id} refreshData={refreshData} />
      ) : (
        <></>
      )}
      {removeEvent ? (
        <Wrap>
          <DeleteEvent
            event_id={event_id}
            refreshData={refreshData}
            setFormVisible={setFormVisible}
          />
          <UpdateEvent event_id={event_id} editEvent={editEvent} />
        </Wrap>
      ) : (
        <></>
      )}
    </Box>
  );
}
