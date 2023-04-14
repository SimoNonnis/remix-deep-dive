import Title from "~/components/Title";
import Link1 from "~/components/Link1";

export default function NotesPage() {
  return (
    <main>
      <Title>Notes</Title>
      <Link1 to="/">Home Page</Link1>
    </main>
  );
}

export const meta = () => {
  return [{ title: "Remix Deep Dive | Notes" }];
};
