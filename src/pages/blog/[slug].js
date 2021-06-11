import Head from "next/head"
import { getArticles } from "@/data/articles"
import getArticle from "@/data/article"

const Article = ({ article }) => {
  console.log({ article })
  return (
    <div className="container max-w-screen-lg m-auto mt-28">
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
      </Head>
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
