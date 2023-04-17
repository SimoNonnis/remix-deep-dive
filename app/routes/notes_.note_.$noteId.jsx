import { json } from "@remix-run/node";
import {
  Link,
  useRouteError,
  isRouteErrorResponse,
  useLoaderData,
} from "@remix-run/react";
import { getNoteById } from "~/data/notes";
import Title from "~/components/Title";

export default function NoteDetailPage() {
  const note = useLoaderData();

  return (
    <main className="max-w-xl	my-12 mx-auto	p-8 text-center rounded-3xl shadow-md	bg-blue-500 text-zinc-100">
      <header>
        <nav className="mt-4 mb-8">
          <Link to="/notes" className="p-2">
            Back to notes
          </Link>
          <Title>{note.title}</Title>
        </nav>
      </header>
      <div className="whitespace-nowrap	">{note.content}</div>
    </main>
  );
}

export async function loader({ params }) {
  const selectedNote = await getNoteById(params.noteId);

  if (!selectedNote) {
    throw json({ message: "There was a problem loading this note." });
  }

  return selectedNote;
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
