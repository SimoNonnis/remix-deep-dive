import { Link } from "@remix-run/react";

import Title from "~/components/Title";

export default function NoteDetailPage() {
  return (
    <main className="max-w-xl	my-12 mx-auto	p-8 text-center rounded-3xl shadow-md	bg-blue-500 text-zinc-100">
      <header>
        <nav className="mt-4 mb-8">
          <Link to="/notes" className="p-2">
            Back to notes
          </Link>
          <Title>Single Note</Title>
        </nav>
      </header>
      <div className="whitespace-nowrap	">Single note content</div>
    </main>
  );
}
