import { json, redirect } from "@remix-run/node";
import {
  useLoaderData,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";

import { validateTitle } from "~/utils/validation.server";
import { getStoredNotes, storeNotes } from "~/data/notes";

import Title from "~/components/Title";
import NewNote from "~/components/NewNote";
import NoteList from "~/components/NoteList";
import Link1 from "~/components/Link1";

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

  if (!notesList || notesList.length === 0) {
    throw json({ message: "Could not find any notes" });
  }

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

export function ErrorBoundary() {
  const error = useRouteError();
  console.log("🚀 -> ErrorBoundary -> error: ", error.data.message);

  if (isRouteErrorResponse(error)) {
    return (
      <main className="text-center  p-4  bg-lime-300 block mx-auto ">
        <Title>Error</Title>
        <div>{error.data.message}</div>
        <p>
          <Link1 to="/">Back to safety</Link1>
        </p>
      </main>
    );
  }

  return (
    <main className="text-center  p-4  bg-lime-300 block mx-auto ">
      <Title>Error</Title>
      <div>{error.message}</div>
      <p>
        <Link1 to="/">Back to safety</Link1>
      </p>
    </main>
  );
}
