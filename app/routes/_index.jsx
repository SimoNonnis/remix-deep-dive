import Title from "~/components/Title";
import Link1 from "~/components/Link1";

export default function IndexPage() {
  return (
    <main className="h-screen text-center text-zinc-200">
      <div className="mt-40">
        <Title>A better way of keeping track of your notes</Title>
        <p className="mt-4">
          Try our early beta and never loose track of your notes again!
        </p>

        <Link1 to="notes">View Notes</Link1>
      </div>
    </main>
  );
}

export const meta = () => {
  return [{ title: "Remix Deep Dive" }];
};
