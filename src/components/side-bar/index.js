import Link from "next/link";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import IconButton from "../IconButton";
import links from "../header/links";
import Close from "../icons/close";

const Sidebar = ({ handleClose, open }) => {
  const hideSidebar = event => {
    !open && event.currentTarget.classList.add("invisible");
  };

  return ReactDOM.createPortal(
    <FocusTrap active={open}>
      <aside
        id="sidenav"
        onTransitionEnd={hideSidebar}
        aria-label="Navigation Menu"
        className={`fixed top-0 left-0 h-screen w-full bg-white dark:bg-gray-800 z-50 flex justify-center items-center transform transition-transform duration-300 shadow-2xl ${
          open ? "visible translate-x-0" : "-translate-x-full"
        }`}
      >
        <IconButton
          aria-label="close side navbar"
          className="absolute right-4 top-3"
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <ul className="space-y-8">
          {links.map(({ label, path }) => (
            <li key={label} className="text-center">
              <Link href={path}>
                <a
                  onClick={handleClose}
                  className="text-2xl text-gray-700 dark:text-gray-100 hover:text-purple-700 dark:hover:text-purple-300 focus:text-purple-700 dark:focus:text-purple-300 font-headline font-semibold transition-colors"
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </FocusTrap>,
    document.querySelector("#__next")
  );
};

export default Sidebar;
