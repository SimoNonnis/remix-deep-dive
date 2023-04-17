import { json, redirect } from "@remix-run/node";
import {
  Link,
  useRouteError,
  isRouteErrorResponse,
  useLoaderData,
} from "@remix-run/react";
import { getNoteById, deleteNote } from "~/data/notes.server";
import Title from "~/components/Title";

export default function NoteDetailPage() {
  const note = useLoaderData();

  return (
    <main className="max-w-xl	my-12 mx-auto	p-8 text-center rounded-3xl shadow-md	bg-blue-500 text-zinc-100">
      <header>
        <nav className="mb-8">
          <Link
            to="/notes"
            className="block p-2 underline hover:no-underline mb-4"
          >
            Back to notes
          </Link>
          <Title>{note.title}</Title>
        </nav>
      </header>
      <div className="whitespace-nowrap	">{note.content}</div>
    </main>
  );
}

export const meta = ({ data }) => {
  return [{ title: "Remix Deep Dive | Notes | Note | " + data.title }];
};

export async function loader({ params }) {
  const selectedNote = await getNoteById(params.noteId);

  if (!selectedNote) {
    throw json({ message: "There was a problem loading this note." });
  }

  return selectedNote;
}

export async function action({ params }) {
  await deleteNote(params.noteId);

  return redirect("/notes");
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <main className="text-center mx-2">
        <div className="text-lime-700">
          <b className="text-orange-600  ">#</b> {error.data.message}
        </div>
      </main>
    );
  }

  return (
    <main className="text-center  p-4  bg-lime-300 block mx-auto ">
      <Title>Error</Title>
      <div>{error.message}</div>
    </main>
  );
}
