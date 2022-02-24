import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    mainPurple: "#580AFF",
    secondaryPurple: "#9E89F1",
    primaryDark: "#000000",
    primaryLight: "#FFFFFF"
  }
};


const theme = extendTheme({ colors });
export default theme;
export function create() {
  return <p>create</p>;
}

