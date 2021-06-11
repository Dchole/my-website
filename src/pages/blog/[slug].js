import Head from "next/head"
import Image from "next/image"
import { getArticles } from "@/data/articles"
import getArticle from "@/data/article"

const Article = ({ article }) => {
  return (
    <div className="container max-w-screen-lg m-auto mt-28">
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
      </Head>

      <section className="mb-12">
        <div className="relative w-full h-[200px] sm:h-[400px] mb-10">
          <Image
            src={article.cover_image}
            layout="fill"
            objectFit="cover"
            alt={article.title}
          />
        </div>
        <h1 className="m-auto text-5xl sm:text-6xl text-gray-900 dark:text-gray-50 font-headline font-bold">
          {article.title}
        </h1>
        <div className="mt-4 mb-10 m-auto">
          {article.tags.map((tag, index) => (
            <em
              key={tag}
              style={{
                backgroundColor: `hsl(${createHue(index)}, 90%, 83%)`
              }}
              className="mr-6 p-1 font-body tracking-body text-sm"
            >
              #{tag}
            </em>
          ))}
        </div>
      </section>

      <ReactMarkdown
        remarkPlugins={[gfm]}
        components={components}
        className="max-w-[75ch] m-auto text-gray-900 dark:text-gray-100 transition-colors"
        linkTarget="_blank"
        skipHtml
      >
        {article.body_markdown}
      </ReactMarkdown>

      <style jsx>{`
        .list {
          list-style: revert;
          padding: revert;
        }
      `}</style>
    </div>
  )
}

export const getStaticPaths = async () => {
  const allArticles = await getArticles()
  const paths = allArticles.map(post => ({ params: { slug: post.slug } }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const article = await getArticle(params.slug)

  return { props: { article } }
}

export default Article
