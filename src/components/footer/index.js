import Link from "next/link";
import Image from "next/image";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="px-4 lg:px-0 mt-16 bg-gray-100 dark:bg-gray-800 pt-12 pb-8 transition-colors">
      <h2 className="sr-only">Footer Navigation</h2>
      <Links />
      <div
        id="base-footer"
        className="container max-w-screen-lg m-auto flex justify-between items-center"
      >
        <div className=""></div>
        <Link href="/about#spotify-playlist">
          <a
            className="text-gray-600 dark:text-gray-300 font-body tracking-body flex items-center gap-2"
            aria-label="listen with me on spotify"
          >
            <Image
              src="/spotify-logo.svg"
              width={32}
              height={32}
              alt="spotify logo"
            />
            <span className="text-gray-800 dark:text-gray-200 font-medium">
              Listen with me
            </span>{" "}
            &mdash; Spotify
          </a>
        </Link>
      </div>
      <a
        href="#skip-to-nav"
        className="text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-100 fixed -bottom-80 focus:bottom-0 right-0"
      >
        Back to top
      </a>
    </footer>
  );
};

export default Footer;
