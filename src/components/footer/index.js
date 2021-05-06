import Link from "next/link";
import Image from "next/image";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-100 pt-12 pb-8">
      <h2 className="sr-only">Other Links</h2>
      <Links />
      <div
        id="base-footer"
        className="container max-w-screen-lg m-auto flex justify-between items-center"
      >
        <div className=""></div>
        <Link href="/about#spotify-playlist">
          <a className="text-gray-600 font-body tracking-body flex items-center gap-2">
            <Image
              src="/spotify-logo.svg"
              width={32}
              height={32}
              alt="spotify logo"
            />
            <span className="text-gray-800 font-medium">Listen with me</span>{" "}
            &mdash; Spotify
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
