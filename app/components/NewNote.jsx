export default function NewNote() {
  return (
    <form method="post">
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required />
      </p>

      <p>
        <label htmlFor="content">Title</label>
        <textarea id="content" type="text" name="content" rows="5" required />
      </p>

      <div>
        <button>Add Note</button>
      </div>
    </form>
  );
}
