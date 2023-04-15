import fs from "fs/promises";

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile("./app/data/notes.json", {
    encoding: "utf8",
  });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data?.notes ?? [];

  return storedNotes;
}

export function storeNotes(notes) {
  return fs.writeFile(
    "./app/data/notes.json",
    JSON.stringify({ notes: notes || [] })
  );
}
