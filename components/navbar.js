import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

const Links = [
  ["Create an event", "/api/auth/login"],
  ["See all Events", "/events"],
];
const UserLinks = [
  ["Create an event", "/create"],
  ["See all Events", "/events"],
];
const NavLink = ({ children }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      color: "brand.primaryDark",
    }}
    color="brand.mainPurple"
    fontWeight="bold"
  >
    <Link href={children[1]}>
      <a>{children[0]}</a>
    </Link>
  </Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();
  return (
    <Box fontFamily="Quicksand" px={4}>
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1.5}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        justifyContent={"space-between"}
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Link href="/">
            <Box cursor={"pointer"} fontSize="xl">
              Co:llab
            </Box>
          </Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {user
              ? UserLinks.map((link) => <NavLink key={link}>{link}</NavLink>)
              : Links.map((link) => <NavLink key={link}>{link}</NavLink>)}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          {user ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://lh3.googleusercontent.com/a/AATXAJwg6hNxXw0Ir5vsCmcNT5Wq3z_RcN3RglEYFSWs=s96-c"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href="/profile">
                    <a>My events</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/api/auth/logout">
                    <a>Organised events</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/api/auth/logout">
                    <a>Past events</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/api/auth/logout">
                    <a>Log out</a>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"brand.mainPurple"}
              _hover={{
                bg: "brand.primaryDark",
              }}
            >
              <Link href="/api/auth/login">
                <a>Sign up/Log in</a>
              </Link>
            </Button>
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={3} pt={3}>
            {user
              ? UserLinks.map((link) => <NavLink key={link}>{link}</NavLink>)
              : Links.map((link) => <NavLink key={link}>{link}</NavLink>)}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
