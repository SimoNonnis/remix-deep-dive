import { Link } from "@remix-run/react";

export default function NotesPage() {
  return (
    <main>
      <h1>Notes</h1>
      <p>
        <Link to="/">Home Page</Link>
      </p>
    </main>
  );
}

export const meta = () => {
  return [{ title: "Remix Deep Dive | Notes" }];
};
