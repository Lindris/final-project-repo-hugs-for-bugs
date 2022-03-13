import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import EventListingCard from "./cards/eventListingCard.js";

function filterEvent(payload, type) {
  return payload.filter(({ event_type }) => event_type === type);
}

export default function EventFilter({ payload, sendEventData }) {
  return (
    <Tabs
      align="center"
      variant="soft-rounded"
      colorScheme={"brand.mainPurple"}
    >
      <TabList>
        <Tab>All events</Tab>
        <Tab>Hackathons</Tab>
        <Tab>Code Clubs</Tab>
        <Tab>Guest Speakers</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {payload.map((event) => {
            return (
              <EventListingCard
                key={event.event_id}
                onClick={() => sendEventData(event.event_id)}
                {...event}
              />
            );
          })}
        </TabPanel>
        <TabPanel>
          {filterEvent(payload, "Hackathon").map((event) => {
            return (
              <EventListingCard
                key={event.event_id}
                onClick={() => sendEventData(event.event_id)}
                {...event}
              />
            );
          })}
        </TabPanel>
        <TabPanel>
          {filterEvent(payload, "Code Club").map((event) => {
            return (
              <EventListingCard
                key={event.event_id}
                onClick={() => sendEventData(event.event_id)}
                {...event}
              />
            );
          })}
        </TabPanel>
        <TabPanel>
          {filterEvent(payload, "Guest Speaker").map((event) => {
            return (
              <EventListingCard
                key={event.event_id}
                onClick={() => sendEventData(event.event_id)}
                {...event}
              />
            );
          })}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
