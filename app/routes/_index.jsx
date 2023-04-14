import { Link } from "@remix-run/react";

import Title from "~/components/Title";
export default function IndexPage() {
  return (
    <main>
      <Title>A better way of keeping track of your notes</Title>
      <p>Try our early beta and never loose track of your notes again!</p>
      <p>
        <Link to="notes">View Notes</Link>
      </p>
    </main>
  );
}

export const meta = () => {
  return [{ title: "Remix Deep Dive" }];
};
