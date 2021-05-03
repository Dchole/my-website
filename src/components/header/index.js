import { useRouter } from "next/router";
import Link from "next/link";
import SunIcon from "../icons/sun";
import links from "./links";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className="absolute w-full">
      <div className="toolbar px-4 py-6 m-auto flex justify-between container max-w-screen-lg">
        <button
          aria-label="light theme"
          className="p-3 rounded-full bg-transparent hover:bg-gray-500 hover:bg-opacity-10 focus:outline-none focus:bg-gray-500 focus:bg-opacity-10 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-30 transition-colors"
        >
          <SunIcon />
        </button>
        <nav>
          <ul className="flex gap-8">
            {links.map(({ label, path }) => (
              <li
                key={label}
                className={
                  pathname === path
                    ? "active-link text-purple-700 relative overflow-hidden"
                    : "relative overflow-hidden"
                }
              >
                <Link href={path}>
                  <a className="text-lg font-semibold font-headline hover:text-purple-700 focus:outline-none focus:text-purple-700 transition-colors">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <style jsx>{`
        .active-link:focus-within::before,
        .active-link:focus-within::after {
          width: 100%;
        }

        .active-link::before,
        .active-link::after {
          content: "";
          position: absolute;
          top: 0;
          width: 24px;
          height: 100%;
          z-index: -1;
          transition: width ease-out 120ms;
        }

        .active-link::before {
          right: 0;
          border-top: 3px solid currentColor;
        }

        .active-link::after {
          left: 0;
          border-bottom: 3px solid currentColor;
        }
      `}</style>
    </header>
  );
};

export default Header;
