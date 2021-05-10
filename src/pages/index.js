import Head from "next/head";
import PopularArticles from "@/components/popular-articles";
import Snippets from "@/components/code-snippets";
import getGists from "@/data/recent-gists";
import { popularArticles } from "@/data/articles";

export default function Home({ articles, gists }) {
  return (
    <div className="bg-waves-light dark:bg-waves-dark bg-cover bg-center bg-no-repeat">
      <Head>
        <title>Derek Oware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="hero" className="w-full mb-16">
        <section id="intro" className="container max-w-screen-md m-auto">
          <div className="pt-40 mb-4 space-y-5">
            <h1 className="text-4xl sm:text-5xl sm:text-center text-gray-900 dark:text-gray-100 font-headline font-bold">
              Hey <span aria-hidden>👋</span>, I'm Derek Oware
            </h1>
            <p className="text-lg sm:text-center sm:m-auto text-gray-600 dark:text-gray-400 tracking-body font-body italic max-w-prose">
              I’m a full-stack web developer with love and enthusiasm for
              creating and experimenting with modern web technologies. I
              specialize mostly on frontend technologies specifically in the
              React ecosystem
            </p>
          </div>
          <div id="call-to-action" className="w-[fit-content] sm:m-auto">
            <button className="py-2 px-4 text-sm leading-relaxed tracking-wider uppercase text-white dark:text-gray-900 font-body font-medium bg-purple-600 dark:bg-purple-400 hover:bg-purple-500 dark:hover:bg-purple-500 shadow-md hover:shadow-lg active:bg-purple-700 active:shadow-none transform transition">
              Contact Me
            </button>
          </div>
        </section>
      </div>
      <PopularArticles articles={articles} />
      <Snippets snippets={gists} />
      <style jsx>{`
        @media (min-width: 640px) {
          #call-to-action:hover button,
          #call-to-action:focus-within button {
            --tw-translate-y: -0.5rem;
          }

          #call-to-action button:active {
            --tw-translate-y: 0;
          }
        }
      `}</style>
    </div>
  );
}

export const getStaticProps = async () => {
  const articles = await popularArticles();
  const gists = await getGists();

  return {
    props: { articles, gists }
  };
};
