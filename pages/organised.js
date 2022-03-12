import { API_URL } from "../config/index.js";
import { getSession, withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Header from "../components/headers/header";
import { Box, Wrap, WrapItem, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import UpdateEventForm from "../components/forms/updateform.js";
import MainImage from "../components/mainImage.js";
import EventDetailsBox from "../components/Boxes/eventdetailsbox.js";
import NoEventBox from "../components/Boxes/noEvent.js";
import { nanoid } from "nanoid";
export default function Created({ payload }) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [eventDetails, setEventDetails] = useState(0);
  const [formVisible, setFormVisible] = useState(false);

  const editEvent = (event_id) => {
    const eventToDisplay = payload.filter((event) => {
      return event.event_id === event_id;
    });
    setEventDetails(eventToDisplay);
    setFormVisible(!formVisible);
  };

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  useEffect(() => {
    setIsRefreshing(false);
  }, []);

  return (
    <>
      <Box minHeight="100vh">
        <Box m="0 auto" p={10} py={20}>
          <Box textAlign={"center"} pb={10}>
            <Header content={`Organised events`} />
          </Box>
          <Wrap
            spacing={10}
            margin="0 auto"
            maxWidth="1500px"
            justify="center"
            pb={10}
          >
            {payload === undefined || payload.length == 0 ? (
              <>
                <Flex
                  key={nanoid()}
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    md: " row",
                    lg: "row",
                  }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={10}
                >
                  <WrapItem key={nanoid()}>
                    <Link href="/create">
                      <a>
                        <NoEventBox
                          title="Why not host your own?"
                          text="Have any ideas or like some of our own? Create an event using our form."
                          tags={[
                            "Imposter syndrome",
                            "React Frameworks",
                            "Docker",
                            "API's",
                            "React Hooks",
                            "Rock, Paper, Scissors",
                            "Tick, Tack, Toe",
                          ]}
                        />
                      </a>
                    </Link>
                  </WrapItem>
                  <Box pt="2em">
                    <MainImage
                      src={
                        "https://i.ibb.co/X4KLGSB/2562-R0l-VIEFOTi-Ax-ODEt-NDM.png"
                      }
                    />
                  </Box>
                </Flex>
              </>
            ) : (
              payload.map((event) => {
                return (
                  <WrapItem key={event.event_id}>
                    <EventDetailsBox
                      {...event}
                      removeEvent={true}
                      refreshData={refreshData}
                      editEvent={editEvent}
                      setFormVisible={setFormVisible}
                    />
                  </WrapItem>
                );
              })
            )}
          </Wrap>
          {formVisible ? (
            <UpdateEventForm
              formVisible={formVisible}
              eventDetails={eventDetails}
            />
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const data = await fetch(`${API_URL}/events/created`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth_id: session.user.sub,
      }),
    });
    const { payload } = await data.json();
    return { props: { payload } };
  },
});
