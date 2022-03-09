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
} from "@chakra-ui/react";

function ConfirmModal(props) {
  const { confirm_message, isOpen, onClose, button1 } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize={"1.6em"}
            fontWeight={"bold"}
            fontFamily={"Quicksand"}
          >
            {confirm_message}
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
            ></Stack>
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmModal;
