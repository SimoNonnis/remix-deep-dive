import { NavLink } from "@remix-run/react";

export default function MainNavigation() {
  return (
    <nav className="py-8 px-4">
      <ul className="flex justify-center gap-6 text-zinc-200">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-amber-400" : "hover:text-amber-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="notes"
            className={({ isActive }) =>
              isActive ? "text-amber-400" : "hover:text-amber-300"
            }
          >
            My Notes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
