import Link from "next/link";
import ReactDOM from "react-dom";
import IconButton from "../buttons/IconButton";
import links from "../header/links";
import Close from "../icons/close";
import FocusTrap from "focus-trap-react";

const Sidebar = ({ handleClose, open }) => {
  const hideSidebar = event => {
    !open && event.currentTarget.classList.add("invisible");
  };

  return ReactDOM.createPortal(
    <FocusTrap active={open}>
      <aside
        id="sidebar"
        onTransitionEnd={hideSidebar}
        aria-label="Navigation"
        className={`fixed top-0 left-0 h-screen w-full bg-white z-50 flex justify-center items-center transform transition-transform shadow-xl ${
          open ? "visible translate-x-0" : "-translate-x-full"
        }`}
      >
        <IconButton
          aria-label="close"
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
                  className="text-2xl text-gray-700 hover:text-purple-700 focus:text-purple-700 font-headline font-semibold transition-colors"
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
