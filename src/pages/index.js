import Head from "next/head";
import PopularArticles from "@/components/popular-articles";
import Snippets from "@/components/code-snippets";
import getGists from "data/recent-gists";
import { popularArticles } from "@/data/articles";

export default function Home({ articles, gists }) {
  return (
    <>
      <Head>
        <title>Derek Oware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        id="hero"
        className="h-screen w-full bg-waves-light bg-cover bg-center bg-no-repeat"
      >
        <section
          id="intro"
          className="absolute container max-w-screen-md w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="mb-4">
            <p className="text-2xl text-right italic font-body">Hey 👋, I'm</p>
            <h1 className="text-8xl text-gray-900 text-center font-headline font-bold">
              Derek Oware
            </h1>
            <h2 className="text-4xl text-gray-800 font-headline font-semibold leading-relaxed">
              Full-Stack Web Developer
            </h2>
            <p className="text-lg text-gray-600 tracking-body font-body italic max-w-prose">
              I’m a full-stack web developer with love and enthusiasm for
              creating and experimenting with modern web technologies. I
              specialize mostly on frontend technologies specifically in the
              React ecosystem
            </p>
          </div>
          <div id="call-to-action">
            <button className="py-2 px-4 text-sm leading-relaxed tracking-wider uppercase text-white font-body font-medium bg-purple-600 hover:bg-purple-500 shadow-md hover:shadow-lg active:bg-purple-700 active:shadow-none transform transition">
              Contact Me
            </button>
          </div>
        </section>
      </div>
      <PopularArticles articles={articles} />
      <Snippets snippets={gists} />
      <style jsx>{`
        #call-to-action {
          width: fit-content;
        }

        #call-to-action:hover button,
        #call-to-action:focus-within button {
          --tw-translate-y: -0.5rem;
        }

        #call-to-action button:active {
          --tw-translate-y: 0;
        }
      `}</style>
    </>
  );
}

export const getStaticProps = async () => {
  const articles = await popularArticles();
  const gists = await getGists();

  return {
    props: { articles, gists }
  };
};
