import {
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Flex,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { MdShare } from "react-icons/md";

export default function Share({ title, url, desc, tags }) {
  return (
    <Flex justifyContent="center" mt={4}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <IconButton
            aria-label="More server options"
            icon={<MdShare />}
            variant="solid"
            w="fit-content"
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
          <PopoverArrow />
          <PopoverBody>
            <Wrap>
              <WrapItem>
                <RedditShareButton
                  url={url}
                  title={`Follow this link to sign up to this amazing event! \n${title}`}
                >
                  <RedditIcon size={32} borderRadius={10} />
                </RedditShareButton>
              </WrapItem>
              <LinkedinShareButton
                children={"true"}
                url={url}
                title={title}
                summary={desc}
                source={"Co:llab"}
              >
                <LinkedinIcon size={32} borderRadius={10} />
              </LinkedinShareButton>
              <TwitterShareButton
                url={`${url}\n`}
                title={`Follow this link to sign up to this amazing event! \n${title}`}
                hashtags={tags}
              >
                <TwitterIcon size={32} borderRadius={10} />
              </TwitterShareButton>
              <EmailShareButton
                url={url}
                subject={"Follow this link to sign up to this amazing event!"}
                body={`${title} \n${desc} @`}
              >
                <EmailIcon size={32} borderRadius={10} />
              </EmailShareButton>
            </Wrap>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
