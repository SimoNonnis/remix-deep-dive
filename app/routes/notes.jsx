import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getStoredNotes, storeNotes } from "~/data/notes";

import Title from "~/components/Title";
import NewNote from "~/components/NewNote";
import { links } from "~/root";

export default function NotesPage() {
  const notesList = useLoaderData();

  return (
    <main className="text-center mx-2">
      <Title>My Notes</Title>
      <NewNote />
      <ul>
        {notesList?.map((note) => (
          <li>{note.title}</li>
        ))}
      </ul>
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

  // TODO Add Validation

  const existingNotes = await getStoredNotes();

  const updatedNotes = [...existingNotes, noteData];

  await storeNotes(updatedNotes);

  return redirect("/notes");
}
