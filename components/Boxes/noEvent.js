import { Box, Tag, WrapItem, Wrap } from "@chakra-ui/react";
import Paragraph from "../paragraph.js";

export default function NoEventBox({ title, text, tags }) {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      maxWidth="300px"
      minWidth="400px"
      minHeight="300px"
      align="center"
    >
      <Paragraph fontSize={"1.3em"} fontWeight={"extrabold"} content={title} />
      <Paragraph content={text} fontSize={"1em"} />
      {tags ? (
        <Wrap py={3}>
          {tags.map((tag) =>
            tag !== "" ? (
              <WrapItem>
                <Tag
                  size={"md"}
                  key={tag}
                  variant="solid"
                  bgColor={"brand.secondaryPurple"}
                >
                  {tag}
                </Tag>
              </WrapItem>
            ) : (
              <></>
            )
          )}
        </Wrap>
      ) : (
        <></>
      )}
    </Box>
  );
}
