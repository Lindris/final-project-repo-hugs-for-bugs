// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../customtheme";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles.css"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styled from "@emotion/styled";
import Head from 'next/head';
import "@fontsource/quicksand";
import "@fontsource/quicksand/400.css";

//entire app put inside an appContainer which is a div and styled with the Quicksand font family
const AppContainer = styled.div`
	font-family: "Quicksand";
`;
//take in all our components and pages and pass them down as props 

function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<AppContainer>
				<Head>
					<link rel="icon" href="https://i.ibb.co/h2R4X1p/Frame-1-4.png" />
				</Head>
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
