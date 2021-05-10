import Link from "next/link";
import { useRouter } from "next/router";

const PopularArticles = ({ articles }) => {
  const { pathname } = useRouter();

  return (
    <section id="sample-articles" className="container max-w-3xl m-auto mb-12">
      <h2 className="text-3xl sm:text-4xl text-gray-800 font-headline font-bold sm:leading-loose mb-5">
        Most Popular Articles
      </h2>
      {articles.map(article => (
        <Link href={`/blog/${article.slug}`} key={article.id}>
          <a
            className="article-link focus:outline-none"
            aria-labelledby={`${article.slug}-title`}
          >
            <article
              id={article.slug}
              className="flex justify-between gap-6 mb-5 p-3 bg-opacity-0 bg-purple-100 hover:bg-purple-50 active:bg-purple-200 transition"
            >
              <div className="max-w-prose">
                <h3
                  id={`${article.slug}-title`}
                  className="text-2xl text-gray-800 font-headline"
                >
                  {article.title}
                </h3>
                <p className="mt-2 mb-3 text-gray-600 tracking-body font-body">
                  {article.description}
                </p>
              </div>
              <div className="w-auto text-gray-700 font-body tracking-body">
                {article.page_views_count}{" "}
                <span className="text-gray-500">views</span>
              </div>
            </article>
          </a>
        </Link>
      ))}
      {pathname === "/" && (
        <div className="my-4">
          <Link href="/blog#all-articles">
            <a
              className="text-lg text-purple-700 font-headline"
              aria-label="View all articles"
            >
              View All &rarr;
            </a>
          </Link>
        </div>
      )}
      <style jsx>{`
        .article-link:focus article {
          --tw-bg-opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default PopularArticles;
