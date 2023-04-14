import { Link } from "@remix-run/react";

export default function Link1({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-block no-underline	 mt-8 bg-amber-300 hover:bg-amber-400 py-2 px-8 rounded text-zinc-600 text-2xl"
    >
      {children}
    </Link>
  );
}
