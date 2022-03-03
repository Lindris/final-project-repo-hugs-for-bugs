import { handleModalSubmit } from "../components/form";
import fetch from "node-fetch";

describe("Check form values", () => {
  test("check if what were posting matches what we get back from the form", async () => {
    const formValues = {
      event_desc: expect.any(String),
      event_date: expect.any(String),
      event_start_time: expect.any(String),
      event_end_time: expect.any(String),
      event_location: expect.any(String),
      event_type: expect.any(String),
      event_tags: expect.any(Array),
      auth_id: expect.any(String),
    };
    const actual = handleModalSubmit(formValues);
    expect(actual).toStrictEqual(formValues);
  });
});
