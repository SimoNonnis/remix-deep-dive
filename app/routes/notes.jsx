import Title from "~/components/Title";
import NewNote from "~/components/NewNote";

export default function NotesPage() {
  return (
    <main className="text-center mx-2">
      <Title>My Notes</Title>
      <NewNote />
    </main>
  );
}

export const meta = () => {
  return [{ title: "Remix Deep Dive | Notes" }];
};
