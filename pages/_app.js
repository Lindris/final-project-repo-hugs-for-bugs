// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../customtheme";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles.css"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styled from "@emotion/styled";
import "@fontsource/quicksand";
import "@fontsource/quicksand/400.css";

const AppContainer = styled.div`
	font-family: "Quicksand";
`;

function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<AppContainer>
				<UserProvider>
					<Navbar />
					<div className="container">
						<Component {...pageProps} />
					</div>
					<div className="footer">
						<Footer />
					</div>
				</UserProvider>
			</AppContainer>
		</ChakraProvider >
	);
}

export default App;
