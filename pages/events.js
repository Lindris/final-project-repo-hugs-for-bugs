import axios from "axios";
export default function Events({ payload }) {
  console.log(payload);
  return <p>some text here to test what the font looks like</p>;
}
export async function getServerSideProps() {
  // Fetch data from external AP
  const response = await fetch(`http://localhost:5000/events`);
  const data = await response.json();
  const payload = data.payload;
  // console.log(data);
  // Pass data to the page via props
  return { props: { payload } };
}
