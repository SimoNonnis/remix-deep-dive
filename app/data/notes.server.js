import fs from "fs/promises";

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile("./notes.json", {
    encoding: "utf8",
  });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data?.notes ?? [];

  return storedNotes;
}

export function storeNotes(notes) {
  return fs.writeFile("./notes.json", JSON.stringify({ notes: notes || [] }));
}

export async function getNoteById(noteId) {
  const notesList = await getStoredNotes();
  const selectedNote = await notesList.find((note) => note.id === noteId);

  return selectedNote;
}

export async function deleteNote(noteId) {
  const notesList = await getStoredNotes();
  console.log("🚀 -> deleteNote -> notesList: ", notesList);

  return null;
}
