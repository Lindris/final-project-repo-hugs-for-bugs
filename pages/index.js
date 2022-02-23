import Head from "next/head";
import LargeButton from "../components/button";

//add button tag below h1
//import Largebutton from components/button

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Code & Collab</h1>
      <LargeButton text={"Explore all events"} />
    </div>
  );
}
