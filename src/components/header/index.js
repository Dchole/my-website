import Link from "next/link";
import SunIcon from "../icons/sun";
import links from "./links";

const Header = () => {
  return (
    <header className="absolute w-full">
      <div className="toolbar p-4 flex justify-between">
        <button aria-label="light theme">
          <SunIcon />
        </button>
        <nav>
          <ul className="p-0 flex gap-8">
            {links.map(({ label, path }) => (
              <li key={label}>
                <Link href={path}>
                  <a className="hover:text-purple-600 transition-colors">
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
