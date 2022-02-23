import Head from "next/head";
import MainButton from "../components/mainButton";
import MainImage from "../components/mainImage";
import InfoCard from "../components/cards/infoCard";
//add button tag below h1
//import mainButon from components/button

// import mainImage component and pass down the src and alt as props

//import InfoCard
//add image link
//in main div create react component for InfoCard with content props {text} and heading {}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Code & Collab</h1>
      <MainImage
        src={"https://i.ibb.co/WKTyGwF/1-WPPKg-TLkh-Iphro-To-MHVoo-Q-1.png"}
        alt={"collaboration"}
      />
      <InfoCard content={"placeholder text"} heading={"header"} />
      <MainButton text={"Explore all events"} route={"/events"} />
    </div>
  );
}
