import { useLoaderData } from "@remix-run/react";

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
      "public, max-age=10, s-maxage=3600, stale-while-revalidate=600",
    Expires: "2023-11-23T02:32:06.163Z",
    "Last-Modified": "2022-11-23T02:32:06.163Z",
  };
}
