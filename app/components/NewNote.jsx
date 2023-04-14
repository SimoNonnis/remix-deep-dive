export default function NewNote() {
  return (
    <form
      method="post"
      className="max-w-lg mx-auto my-12 p-8 rounded-md bg-lime-300 shadow-md text-center"
    >
      <p>
        <label htmlFor="title" className="block mb-2 font-bold text-lime-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          className="block w-full px-1 py-2  bg-lime-400 rounded-sm  text-lime-700"
          required
        />
      </p>

      <p>
        <label
          htmlFor="content"
          className="block mt-8 mb-2 font-bold text-lime-700"
        >
          Content
        </label>
        <textarea
          id="content"
          type="text"
          name="content"
          rows="5"
          className="block w-full px-1 py-2  bg-lime-400 rounded-sm  text-lime-700"
          required
        />
      </p>

      <button className="inline-block cursor-pointer	py-3 px-8 mt-8 rounded-3xl	 bg-lime-400 hover:bg-lime-500 font-bold  text-lime-700 disabled:bg-lime-400 disabled:cursor-not-allowed	disabled:text-lime-500">
        Add Note
      </button>
    </form>
  );
}
