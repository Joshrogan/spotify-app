import { Link } from "@tanstack/router";
import AuthButton from "./AuthButton";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-purple-600 p-2">
      <ul className="flex space-x-4">
        {(
          [
            ["/", "Home"],
            ["/dashboard", "Dashboard"],
          ] as const
        ).map(([to, label]) => {
          return (
            <li key={to}>
              <Link
                to={to}
                activeOptions={{
                  exact: to === "/",
                }}
                className={` text-white font-mono `}
                activeProps={{
                  className: ` text-black underline decoration-4 `,
                }}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <AuthButton />
      </div>
    </nav>
  );
};

export default NavBar;
