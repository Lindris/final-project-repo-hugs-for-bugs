
//import Paragraph
//created function to return list of upcoming events
//copied text content from profile.js (removed there)
//reduced font sizes
//add border space between events listed

import Paragraph from "./paragraph"

export default function EventDetails() {
return(
 <>
 <Paragraph content={"Test Event"} fontSize={"1em"} fontWeight={"bold"} />
 <Paragraph content={"Wed 16 Feb 2022, 00:00"} fontSize={"0.8em"} fontWeight={"bold"} colour={"brand.mainPurple"} />
 <Paragraph content={"Online Event"} fontSize={"0.7em"} fontWeight={"medium"} />
 </>
)

}