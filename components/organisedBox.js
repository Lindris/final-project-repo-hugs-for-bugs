import { Box, HStack, Tag, Wrap, WrapItem } from "@chakra-ui/react";
import RemoveUser from "./removeUser.js";
import DeleteEvent from "./deleteEvent.js";
import Paragraph from "./paragraph.js";
import EditEvent from "./editEvent.js";
import EventDetails from "../components/eventListingDetails";

export default function OrganisedBox({
  title,
  event_type,
  content1,
  event_date,
  event_start_time,
  event_end_time,
  event_desc,
  event_location,
  event_tags,
  event_id,
  deleteEvent,
  refreshData,
  first_name,
  last_name,
  editEvent,
  setFormVisible,
}) {
  //   console.log(event_id);
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
      <HStack mb="4" justify={"center"}>
        <Paragraph
          fontSize={"1.3em"}
          fontWeight={"extrabold"}
          content={title}
        />
      </HStack>
      {event_type ? (
        <Paragraph
          content={`${event_type} by ${first_name} ${last_name}`}
          fontSize={"1.2em"}
          fontWeight={"bold"}
        />
      ) : (
        <></>
      )}
      {event_date ? (
        <Paragraph
          content={new Date(event_date).toString().slice(0, 15)}
          fontSize={"1em"}
          fontWeight={"bold"}
          colour={"brand.mainPurple"}
        />
      ) : (
        <></>
      )}
      {event_start_time ? (
        <Paragraph
          content={`${event_start_time.slice(0, 5)} - ${event_end_time.slice(
            0,
            5
          )}`}
          fontSize={"1em"}
          fontWeight={"bold"}
        />
      ) : (
        <></>
      )}
      <Paragraph content={event_desc} fontSize={"1em"} fontWeight={"medium"} />
      <Paragraph
        content={event_location}
        fontSize={"1em"}
        fontWeight={"medium"}
      />
      <Paragraph content={content1} fontSize={"1.1em"} fontWeight={"bold"} />
      {event_tags ? (
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
      ) : (
        <></>
      )}
      <Wrap>
        <DeleteEvent
          event_id={event_id}
          refreshData={refreshData}
          setFormVisible={setFormVisible}
        />
        <EditEvent event_id={event_id} editEvent={editEvent} />
      </Wrap>
    </Box>
  );
}
