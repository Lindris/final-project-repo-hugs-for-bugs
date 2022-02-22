// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../customtheme";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import "@fontsource/quicksand/400.css";
import "./styles.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// import { extendTheme } from "@chakra-ui/react";

// // 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };
// const theme = extendTheme({ colors });

function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<UserProvider>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</UserProvider>
		</ChakraProvider>
	);
}

export default App;
