//import Paragraph
//created function to return list of upcoming events
//copied text content from profile.js (removed there)
//reduced font sizes
//add border space between events listed

import Paragraph from "./paragraph";

export default function EventDetails({ type, date, starttime, endtime }) {
  return (
    <>
      <Paragraph content={type} fontSize={"1em"} fontWeight={"bold"} />
      <Paragraph
        content={new Date(date).toString().slice(0, 15)}
        fontSize={"0.8em"}
        fontWeight={"bold"}
        colour={"brand.mainPurple"}
      />
      <Paragraph
        content={`${starttime.slice(0, 5)} - ${endtime.slice(0, 5)}`}
        fontSize={"0.8em"}
        fontWeight={"bold"}
      />
    </>
  );
}
