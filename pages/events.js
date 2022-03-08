import { useState } from "react";
import EventListingCard from "../components/cards/eventListingCard.js";
import BasicModal from "../components/modal.js";
import { useDisclosure, Box } from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0";
import Header from "../components/headers/header";
import { API_URL } from "../config/index.js";

export default function Events({ payload }) {
	const [eventData, seteventData] = useState(false);
	const { user } = useUser();
	const [confirmEvent, setConfirmEvent] = useState("");
	const { isOpen, onOpen, onClose } = useDisclosure();

	function sendEventData(event_id) {
		const datatosend = payload.filter((event) => event.event_id === event_id);
		seteventData(datatosend);
		onOpen();
	}
	async function addUsertoEvent(event_id) {
		if (!user) {
			setConfirmEvent("Please sign up or log in to attend");
			setTimeout(function () {
				onClose();
				setConfirmEvent("");
			}, 3000);
		} else if (user) {
			try {
				const response = await fetch(`${API_URL}/users`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						auth_id: user.sub,
						event_attend: event_id,
					}),
				});
				if (response.status === 400) {
					setConfirmEvent("You have already signed up to attend this event");
				} else if (response.status === 200) {
					setConfirmEvent("You have successfully registered for this event");
				}
			} catch (error) {}
			setTimeout(function () {
				onClose();
				setConfirmEvent("");
			}, 4000);
		}
	}
	return (
		<Box m="0 auto" textAlign={"center"} py={10}>
			<Box pb={5}>
				<Header content={"Upcoming events"} />
			</Box>
			{/* in map method iterate over the images using index - outside the payload data inside the call back 
      inside return render 10 cards - using the index of the cards to mirror the index of the images - pull the image from array to match the card index}*/}
			{payload.map(
				({
					event_type,
					event_date,
					event_desc,
					event_id,
					count,
					event_start_time,
					event_end_time,
				}) => {
					return (
						<EventListingCard
							key={event_id}
							event_start_time={event_start_time}
							event_end_time={event_end_time}
							event_name={event_type}
							event_date={event_date.slice(0, 10)}
							event_desc={event_desc}
							count={count}
							onClick={() => sendEventData(event_id)}
						/>
					);
				}
			)}
			{eventData ? (
				<BasicModal
					isOpen={isOpen}
					onClose={onClose}
					{...eventData[0]}
					button1="Close"
					button2="Attend event"
					onClick={() => addUsertoEvent(eventData[0].event_id)}
					confirm={confirmEvent}
				/>
			) : (
				<></>
			)}
		</Box>
	);
}
export async function getServerSideProps() {
	// Fetch data from external AP
	const response = await fetch(`${API_URL}/events`);
	const data = await response.json();
	let payload = data.payload;
	// maximum 10 cards
	if (payload.length > 10) {
		payload = payload.slice(0, 10);
	}
	// Pass data to the page via props
	return { props: { payload } };
}

// have a condition that check if user exists first
// when user clicks attend event send auth id and event id to the db
// if user is not logged in - display message to say they need to create an account ...
