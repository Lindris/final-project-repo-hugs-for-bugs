// pages/_app.js
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import "@fontsource/quicksand/400.css";
import "./styles.css";

function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default App;
