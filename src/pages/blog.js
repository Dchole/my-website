import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Snippets from "@/components/code-snippets";
import PopularArticles from "@/components/popular-articles";
import formatDate from "@/utils/format-date";
import getGists from "@/data/recent-gists";
import { popularArticles, recentArticles } from "@/data/articles";

const Blog = ({ popularArticles, recentArticles, gists }) => {
  return (
    <>
      <Head>
        <title>Derek Oware | Blog</title>
        <meta
          name="description"
          content="I write about my experiences and some of the tips and best practices I discover on my journey. This blog focuses on mostly frontend User Experience and Developer Experience as well"
        />
      </Head>

      <h1 className="sr-only">Articles</h1>
      <section id="popular-articles" className="h-full pt-24">
        <PopularArticles articles={popularArticles} />
      </section>

      <section id="all-articles" className="container max-w-screen-xl m-auto">
        <div className="container max-w-screen-md m-auto mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-800 font-headline font-bold leading-loose mb-5">
            All Posts
          </h2>

          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search articles"
            aria-label="search articles"
            className="rounded-md border-2 border-gray-400 focus:outline-none focus:border-gray-900 px-3 py-1 text-lg text-gray-700 font-body tracking-body w-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 mb-8">
          {recentArticles.map(article => (
            <Link href={`/blog/${article.slug}`} key={article.id}>
              <a className="article-link p-6 focus:outline-none rounded-lg focus:bg-gray-200 hover:bg-gray-100 focus:shadow-md focus:-translate-y-1 hover:-translate-y-1 hover:shadow-md active:bg-gray-300 active:shadow-none active:translate-y-0 transform transition">
                <article id={article.slug} className="relative h-full w-full">
                  <div className="relative h-52">
                    <Image
                      src={`${article.cover_image}`}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="mb-8">
                    <h3 className="text-2xl text-gray-800 font-headline font-semibold my-4">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 tracking-body font-body">
                      {article.description}
                    </p>
                  </div>
                  <div className="absolute bottom-1 right-1">
                    {formatDate(article.published_at)}
                  </div>
                </article>
              </a>
            </Link>
          ))}
        </div>
      </section>
      <Snippets snippets={gists} />
    </>
  );
};

export const getStaticProps = async () => {
  const popular = await popularArticles();
  const recent = await recentArticles();
  const gists = await getGists();

  return {
    props: {
      popularArticles: popular,
      recentArticles: recent,
      gists
    }
  };
};

export default Blog;
