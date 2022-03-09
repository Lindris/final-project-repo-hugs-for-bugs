import { Box, HStack, Tag, Wrap, WrapItem } from "@chakra-ui/react";
import RemoveUser from "./removeUser.js";
import Paragraph from "./paragraph.js";
import EventDetails from "../components/eventListingDetails";

export default function ReusableBox({
  title,
  event_type,
  content1,
  event_date,
  event_start_time,
  event_end_time,
  event_desc,
  event_location,
  event_tags,
  payload,
  event_id,
  remove,
  refreshData,
  first_name,
  last_name,
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
      <HStack mb="4">
        <Paragraph
          fontSize={"1.5em"}
          fontWeight={"extrabold"}
          content={title}
        />
      </HStack>
      {event_type ? (
        <Paragraph
          content={`${event_type} by ${first_name} ${first_name}`}
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
          content={`${event_start_time} - ${event_end_time}`}
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
      {remove ? (
        <RemoveUser event_id={event_id} refreshData={refreshData} />
      ) : (
        <></>
      )}
      <Paragraph content={content1} fontSize={"1.1em"} fontWeight={"bold"} />
      {event_tags ? (
        <Wrap pt={3}>
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
    </Box>
  );
}
