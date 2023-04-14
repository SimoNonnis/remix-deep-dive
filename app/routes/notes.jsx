import { Link } from "@remix-run/react";

import Title from "~/components/Title";

export default function NotesPage() {
  return (
    <main>
      <Title>Notes</Title>
      <p>
        <Link to="/">Home Page</Link>
      </p>
    </main>
  );
}

export const meta = () => {
  return [{ title: "Remix Deep Dive | Notes" }];
};
