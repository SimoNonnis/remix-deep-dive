import { json, redirect } from "@remix-run/node";

import { getStoredNotes, storeNotes } from "~/data/notes";

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

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  noteData.id = new Date().toISOString();

  // TODO Add Validation

  const existingNotes = await getStoredNotes();

  const updatedNotes = [...existingNotes, noteData];

  await storeNotes(updatedNotes);

  return redirect("/notes");
}
