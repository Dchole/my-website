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

      <section id="all-articles" className="container max-w-screen-md m-auto">
        <h2 className="text-5xl text-gray-800 font-headline font-bold leading-loose">
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
      </section>

      {recentArticles.map(article => (
        <Link href={`/blog/${article.slug}`} key={article.id}>
          <a className="article-link focus:outline-none">
            <article id={article.slug}>
              <Image
                src={`${article.cover_image}`}
                alt={article.title}
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-2xl text-gray-800 font-headline">
                  {article.title}
                </h3>
                <p className="text-gray-600 tracking-body font-body">
                  {article.description}
                </p>
              </div>
              <div className="published_date">
                {formatDate(article.published_at)}
              </div>
            </article>
          </a>
        </Link>
      ))}

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
