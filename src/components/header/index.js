import Link from "next/link";
import SunIcon from "../icons/sun";
import links from "./links";

const Header = () => {
  return (
    <header className="absolute w-full">
      <div className="toolbar px-4 py-6 m-auto flex justify-between container max-w-screen-lg">
        <button
          aria-label="light theme"
          className="p-3 rounded-full bg-transparent hover:bg-gray-500 hover:bg-opacity-10 transition-colors"
        >
          <SunIcon />
        </button>
        <nav>
          <ul className="flex gap-8">
            {links.map(({ label, path }) => (
              <li key={label}>
                <Link href={path}>
                  <a className="text-lg font-display hover:text-purple-600 transition-colors">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
