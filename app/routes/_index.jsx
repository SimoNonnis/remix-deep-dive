import { Link } from "@remix-run/react";

export default function IndexPage() {
  return (
    <main>
      <h1>A better way of keeping track of your notes</h1>
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
