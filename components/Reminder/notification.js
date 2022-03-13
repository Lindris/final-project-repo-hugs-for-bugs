import { Box, IconButton } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { FaBell } from "react-icons/fa";

export default function Reminder({ reminder }) {
  return (
    <IconButton
      css={css`
        position: relative !important;
      `}
      mr={4}
      py={"2"}
      bg={"none"}
      //   _focus={{
      //     textDecoration: "none",
      //     color: "brand.primaryDark",
      //   }}
      aria-label={"Notifications"}
      size={"lg"}
      icon={
        <>
          <FaBell />
          {reminder ? (
            <Box
              as={"span"}
              color={"white"}
              position={"absolute"}
              top={"12px"}
              right={"13px"}
              bgColor={"#580aff"}
              borderRadius={"10px"}
              zIndex={1}
              p={"5px"}
            ></Box>
          ) : (
            <></>
          )}
        </>
      }
    />
  );
}
