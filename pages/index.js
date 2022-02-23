import Head from "next/head";
import MainButton from "../components/mainButton";
import MainImage from "../components/mainImage";

//add button tag below h1
//import mainButon from components/button

// import mainImage component and pass down the src and alt as props

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Code & Collab</h1>
      <MainImage src={"https://i.ibb.co/WKTyGwF/1-WPPKg-TLkh-Iphro-To-MHVoo-Q-1.png"} alt={"collaboration"} />
      <MainButton text={"Explore all events"} route={"/events"} />
    </div>
  );
}
