import { API_URL } from "../config/index.js";
import { getSession, withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import ReusableBox from "../components/box.js";
import Header from "../components/headers/header";
import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import UpdateEventForm from "../components/updateform.js";
import OrganisedBox from "../components/organisedBox.js";

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
    // console.log(eventDetails);
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
            <WrapItem>
              <Link href="/create">
                <a>
                  <ReusableBox
                    title="Why not host your own?"
                    content1="Have any ideas or like some of our own? Create an event using our form."
                    event_tags={[
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
          ) : (
            payload.map((event) => {
              return (
                <OrganisedBox
                  {...event}
                  deleteEvent="true"
                  refreshData={refreshData}
                  editEvent={editEvent}
                  setFormVisible={setFormVisible}
                />
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
