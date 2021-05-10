import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import SunIcon from "../icons/sun";
import links from "./links";
import Menu from "../icons/menu";
import IconButton from "../IconButton";
import Moon from "../icons/moon";
import { useTheme } from "../theme/ThemeContext";

const Sidebar = dynamic(() => import("../side-bar"), { ssr: false });

const Header = () => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleToggleTheme = event => {
    // theme === "dark" ? setTheme("light") : setTheme("dark");
    toggleTheme();
    console.log({ theme });

    event.currentTarget.animate(
      [
        // keyframes
        { transform: "rotateZ(0deg)" },
        { transform: "rotateZ(360deg)" },
        { transform: "rotateZ(420deg)" },
        { transform: "rotateZ(360deg)" },
        { transform: "rotateZ(400deg)" },
        { transform: "rotateZ(360deg)" },
        { transform: "rotateZ(380deg)" },
        { transform: "rotateZ(360deg)" }
      ],
      {
        // timing options
        duration: 1000,
        easing: "ease-out"
      }
    );
  };

  // useEffect(
  //   () =>
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //       ? setTheme("dark")
  //       : setTheme("light"),
  //   []
  // );

  // useEffect(() => {
  //   theme === "dark"
  //     ? document.documentElement.classList.add("dark")
  //     : document.documentElement.classList.remove("dark");
  // }, [theme]);

  return (
    <header className="absolute w-full top-0 z-50">
      <a id="skip-to-nav" href="#nav" className="absolute -top-80 focus:top-0">
        Skip to navigation
      </a>
      <a href="#main" className="absolute -top-80 focus:top-0">
        Skip to content
      </a>
      <div className="toolbar px-4 py-4 sm:py-6 m-auto flex justify-between container max-w-screen-lg">
        <IconButton
          aria-label="open side navbar"
          className="sm:hidden"
          onClick={handleOpen}
        >
          <Menu />
        </IconButton>
        <IconButton aria-label="toggle light theme" onClick={handleToggleTheme}>
          {theme === "dark" ? <SunIcon /> : <Moon />}
        </IconButton>
        <Sidebar handleClose={handleClose} open={open} />
        <nav id="nav" className="sm:block hidden">
          <ul className="flex gap-8">
            {links.map(({ label, path }) => (
              <li
                key={label}
                className={
                  pathname === path
                    ? "active-link text-purple-700 dark:text-purple-400 relative overflow-hidden"
                    : "relative overflow-hidden text-gray-700 dark:text-gray-100"
                }
              >
                <Link href={path}>
                  <a className="text-lg font-semibold font-headline hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none focus:text-purple-600 dark:focus:text-purple-400 transition-colors">
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
