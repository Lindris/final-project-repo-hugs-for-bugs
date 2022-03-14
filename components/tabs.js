import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import EventListingCard from "./cards/eventListingCard.js";
import NoEventBox from "./Boxes/noEvent.js";
function filterEvent(payload, type) {
  return payload.filter(({ event_type }) => event_type === type);
}

export default function EventFilter({ payload, sendEventData }) {
  const guest = filterEvent(payload, "Guest Speaker");
  const code = filterEvent(payload, "Code Club");
  const hackathon = filterEvent(payload, "Hackathon");

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
          {hackathon.length > 0 ? (
            hackathon.map((event) => {
              return (
                <EventListingCard
                  key={event.event_id}
                  onClick={() => sendEventData(event.event_id)}
                  {...event}
                />
              );
            })
          ) : (
            <Wrap
              spacing={10}
              margin="0 auto"
              maxWidth="1500px"
              justify="center"
              pb={10}
            >
              <WrapItem>
                <a>
                  <NoEventBox
                    title="No more events to display"
                    text="Check back later to see if we have more Hackathon events lined up or, create your own."
                  />
                </a>
              </WrapItem>
            </Wrap>
          )}
        </TabPanel>
        <TabPanel>
          {code.length > 0 ? (
            code.map((event) => {
              return (
                <EventListingCard
                  key={event.event_id}
                  onClick={() => sendEventData(event.event_id)}
                  {...event}
                />
              );
            })
          ) : (
            <Wrap
              spacing={10}
              margin="0 auto"
              maxWidth="1500px"
              justify="center"
              pb={10}
            >
              <WrapItem>
                <a>
                  <NoEventBox
                    title="No more events to display"
                    text="Check back later to see if we have more Code Club events lined up or, create your own."
                  />
                </a>
              </WrapItem>
            </Wrap>
          )}
        </TabPanel>
        <TabPanel>
          {guest.length > 0 ? (
            guest.map((event) => {
              return (
                <EventListingCard
                  key={event.event_id}
                  onClick={() => sendEventData(event.event_id)}
                  {...event}
                />
              );
            })
          ) : (
            <Wrap
              spacing={10}
              margin="0 auto"
              maxWidth="1500px"
              justify="center"
              pb={10}
            >
              <WrapItem>
                <a>
                  <NoEventBox
                    title="No more events to display"
                    text="Check back later to see if we have more Guest Speaker events lined up or, get in touch if you wish to hold your own."
                  />
                </a>
              </WrapItem>
            </Wrap>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
