import { useLoaderData } from "@remix-run/react";
import { addSeconds } from "date-fns";

export const loader = () => {
  const randomNumber = Math.random();
  console.log({ randomNumber });
  return {
    data: {
      randomNumber,
    },
  };
};

export default function Index() {
  const loaderData = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix Caching Demo</h1>
      <p>random number: {loaderData.data?.randomNumber}</p>
    </div>
  );
}

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control":
      "public, max-age=10, s-maxage=10, stale-while-revalidate=10",
    Expires: addSeconds(new Date(), 10),
    "Last-Modified": "2022-11-23T02:32:06.163Z",
  };
}
