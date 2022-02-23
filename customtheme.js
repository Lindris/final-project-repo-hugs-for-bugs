import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };

const colors = {
  brand: {
    mainPurple: "#580AFF",
    secondaryPurple: "#9E89F1",
    primaryDark: "#000000",
    primaryLight: "#FFFFFF"
  },
};

const theme = extendTheme({ colors });
export default theme;
export function create() {
  return <p>create</p>;
}
