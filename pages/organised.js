import { API_URL } from "../config/index.js";
import { getSession, withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

export default function Created({ payload }) {
  console.log(payload);
  return <></>;
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const data = await fetch(`${API_URL}/events/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth_id: session.user.sub,
      }),
    });
    const payload = await data.json();
    return { props: { payload } };
  },
});
