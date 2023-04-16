export default function NoteList({ notes }) {
  if (!notes) return null;

  return (
    <div>
      <ul className="flex justify-center	 gap-4 flex-wrap  mb-2 pt-3">
        {notes.map((note, index) => (
          <li
            key={note.id}
            className="transition-all duration-300	ease-in-out w-80	 rounded shadow-md	bg-blue-500 hover:bg-blue-500 hover:-translate-y-1 text-zinc-100  p-6 "
          >
            <article>
              <header>
                <ul className="text-sm flex justify-between	items-center	font-bold border-b-2	pb-2 mb-2 ">
                  <li>#{index + 1}</li>
                  <li className="">
                    <time dateTime={note.id}>
                      {new Date(note.id).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </li>
                </ul>
                <h2 className="text-xl mb-1 text-left font-bold">
                  {note.title}
                </h2>
              </header>
              <p className="text-left">{note.content} </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
