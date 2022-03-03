import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Stack,
	Tag,
	HStack,
	background,
} from "@chakra-ui/react";
import Paragraph from "./paragraph.js";

function BasicModal(props) {

  console.log(props);
  const {
    event_type,
    event_desc,
    event_date,
    event_start_time,
    event_end_time,
    event_location,
    event_tags,
    isOpen,
    onClose,
    button1,
    button2,
    onClick,
    confirm,
  } = props;
  console.log(event_tags);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize={"1.8em"}
            fontWeight={"bold"}
            fontFamily={"Quicksand"}
          >
            {event_type}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontFamily={"Quicksand"}>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              p={1}
              pt={2}
            >
              <Paragraph
                content={
                  button2 === "Confirm event"
                    ? event_date
                    : event_date.slice(0, 10)
                }
                fontSize={"1em"}
                fontWeight={"bold"}
                colour={"brand.primaryDark"}
              />
              <Paragraph
                content={`${event_start_time}-${event_end_time}`}
                fontSize={"1em"}
                fontWeight={"bold"}
                colour={"brand.mainPurple"}
              />
              <Paragraph
                content={event_location}
                fontSize={"0.9em"}
                color={"brand.primaryDark"}
              />
              <Paragraph content={event_desc} fontSize={"0.9em"} />
              <HStack spacing={4}>
                {event_tags.map((tag) =>
                  tag !== "" ? (
                    <Tag
                      size={"md"}
                      key={tag}
                      variant="solid"
                      bgColor={"brand.secondaryPurple"}
                    >
                      {tag}
                    </Tag>
                  ) : (
                    <></>
                  )
                )}
              </HStack>
              {confirm ? (
                <Paragraph
                  pt={3}
                  content={confirm}
                  fontSize={"0.9em"}
                  color={"brand.primaryDark"}
                  fontWeight={"bold"}
                />
              ) : (
                <></>
              )}
              )
            </Stack>
          </ModalBody>


					<ModalFooter fontFamily={"Quicksand"}>
						<Button
							bgColor={"brand.mainPurple"}
							mr={3}
							onClick={onClose}
							color={"brand.primaryLight"}
							className="button-1"
						>
							{button1}
						</Button>
						<Button variant="ghost" onClick={onClick} className="button-2">
							{button2}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default BasicModal;
