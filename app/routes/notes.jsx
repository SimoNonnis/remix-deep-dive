import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { validateTitle } from "~/utils/validation.server";
import { getStoredNotes, storeNotes } from "~/data/notes";

import Title from "~/components/Title";
import NewNote from "~/components/NewNote";
import NoteList from "~/components/NoteList";

export default function NotesPage() {
  const notes = useLoaderData();

  return (
    <main className="text-center mx-2">
      <Title>My Notes</Title>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export const meta = () => {
  return [{ title: "Remix Deep Dive | Notes" }];
};

export async function loader() {
  const notesList = await getStoredNotes();
  return notesList;
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  noteData.id = new Date().toISOString();

  const formErrors = {
    title: validateTitle(noteData.title),
  };

  if (Object.values(formErrors).some(Boolean)) {
    return formErrors;
  }

  const existingNotes = await getStoredNotes();

  const updatedNotes = [...existingNotes, noteData];

  await storeNotes(updatedNotes);

  return redirect("/notes");
}
