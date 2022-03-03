import { getServerSideProps } from "../pages/events";
import fetch from "node-fetch";

window.fetch = fetch;

describe("Check events", () => {
  test("check if we get a specific event", async () => {
    const actual = await getServerSideProps();

    const actualData = actual.props.payload;
    const expected = {
      event_id: expect.any(Number),
      event_desc: expect.any(String),
      event_date: expect.any(String),
      event_start_time: expect.any(String),
      event_end_time: expect.any(String),
      event_location: expect.any(String),
      event_type: expect.any(String),
      event_tags: expect.any(Array),
      auth_id: expect.any(String),
    };
    expect(actualData).toContainEqual(expected);
  });
  test("check if payload contains less than 10 events", async () => {
    const actual = await getServerSideProps();

    const actualData = actual.props.payload;

    expect(actualData.length <= 10).toBeTruthy();
  });
});
