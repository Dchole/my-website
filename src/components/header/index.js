import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import SunIcon from "../icons/sun";
import links from "./links";
import Menu from "../icons/menu";
import IconButton from "../IconButton";

const Sidebar = dynamic(() => import("../side-bar"), { ssr: false });

const Header = () => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className="absolute w-full top-0 z-50">
      <div className="toolbar px-4 py-4 sm:py-6 m-auto flex justify-between container max-w-screen-lg">
        <IconButton
          aria-label="open side navbar"
          className="sm:hidden"
          onClick={handleOpen}
        >
          <Menu />
        </IconButton>
        <IconButton aria-label="toggle light theme">
          <SunIcon />
        </IconButton>
        <Sidebar handleClose={handleClose} open={open} />
        <nav className="sm:block hidden" aria-label="primary navigation">
          <ul className="flex gap-8">
            {links.map(({ label, path }) => (
              <li
                key={label}
                className={
                  pathname === path
                    ? "active-link text-purple-700 relative overflow-hidden"
                    : "relative overflow-hidden text-gray-700 "
                }
              >
                <Link href={path}>
                  <a className="text-lg font-semibold font-headline hover:text-purple-600 focus:outline-none focus:text-purple-600 transition-colors">
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
