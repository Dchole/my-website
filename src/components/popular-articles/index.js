import Link from "next/link";
import { useRouter } from "next/router";

const PopularArticles = ({ articles }) => {
  const { pathname } = useRouter();

  return (
    <section id="sample-articles" className="container max-w-3xl m-auto mb-12">
      <h2 className="text-5xl text-gray-800 font-headline font-bold leading-loose">
        Most Popular Articles
      </h2>
      {articles.map(article => (
        <Link href={`/${article.slug}`} key={article.id}>
          <a>
            <article
              id={article.slug}
              className="flex justify-between gap-6 mb-5"
            >
              <div className="max-w-prose">
                <h3 className="text-2xl text-gray-800 font-headline">
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
          <Link href="/blog">
            <a className="text-lg text-purple-700 font-headline">
              View All &rarr;
            </a>
          </Link>
        </div>
      )}
    </section>
  );
};

export default PopularArticles;
