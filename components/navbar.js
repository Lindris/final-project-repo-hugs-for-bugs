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
      bg: useColorModeValue("gray.200", "gray.700"),
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
  user ? console.log(user) : console.log("user");
  return (
    <Box fontFamily="Quicksand" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Link href="/">
            <Box cursor={"pointer"}>LOGO</Box>
          </Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {user
              ? UserLinks.map((link, i) => <NavLink key={link}>{link}</NavLink>)
              : Links.map((link, i) => <NavLink key={link}>{link}</NavLink>)}
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
            <Menu>
              <MenuItem>
                <Link href="/api/auth/login">
                  <a>Sign up/Log in</a>
                </Link>
              </MenuItem>
            </Menu>
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {user
              ? UserLinks.map((link, i) => <NavLink key={link}>{link}</NavLink>)
              : Links.map((link, i) => <NavLink key={link}>{link}</NavLink>)}
          </Stack>
        </Box>
      ) : null}
    </Box>

    // <Flex fontFamily="Quicksand">
    // 	<Box m="2" >
    // 		<HStack>
    // 			<Menu>
    //
    // 				<MenuItem color="brand.mainPurple" fontWeight="bold">
    // 					{user ? (
    // 						<Link href="/create">
    // 							<a>Create an event</a>
    // 						</Link>
    // 					) : (
    // 						<Link href="/api/auth/login">
    // 							<a>Create an event</a>
    // 						</Link>
    // 					)}
    // 				</MenuItem>
    // 			</Menu>
    // 		</HStack>
    // 	</Box>
    // 	<Spacer />
    // 	{user ? (
    // 		<>
    // 			<Box >
    // 				<Menu>
    // 					<MenuButton
    // 						as={Button}
    // 						rightIcon={<ChevronDownIcon />}
    // 						colorScheme="brand"
    // 					>
    // 						Actions
    // 					</MenuButton>
    // 					<MenuList>
    // 						<MenuItem>
    // 							<Link href="/profile">
    // 								<a>My events</a>
    // 							</Link>
    // 						</MenuItem>
    // 						<MenuItem>
    // 							<Link href="/api/auth/logout">
    // 								<a>Organised events</a>
    // 							</Link>
    // 						</MenuItem>
    // 						<MenuItem>
    // 							<Link href="/api/auth/logout">
    // 								<a>Past events</a>
    // 							</Link>
    // 						</MenuItem>
    // 						<MenuItem>
    // 							<Link href="/api/auth/logout">
    // 								<a>Log out</a>
    // 							</Link>
    // 						</MenuItem>
    // 					</MenuList>
    // 				</Menu>
    // 			</Box>
    // 		</>
    // 	) : (
    // 		<Box >
    // 			<Menu>
    // 				<MenuItem>
    // 					<Link href="/api/auth/login">
    // 						{/* put in href once auth0 had been set up */}
    // 						<a>Sign up/Log in</a>
    // 					</Link>
    // 				</MenuItem>
    // 			</Menu>
    // 		</Box>
    // 	)}
    // </Flex >
  );
}

// each menu and menu.item is from antd (UI library)
// menu.item is a list item so they need a key for react to render
// add a search bar
// create a page for contact and connect link to page

// could organised events just be in my events?

// Signup/login rather than two seperate buttons?
