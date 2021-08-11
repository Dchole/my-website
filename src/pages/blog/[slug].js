import "@fontsource/fira-code/400.css"

import Head from "next/head"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import {
  Prism as SyntaxHighlighter,
  vscDarkPlus,
  ghcolors
} from "react-syntax-highlighter"
import { getArticles } from "@/data/articles"
import { useTheme } from "@/components/theme/ThemeContext"
import getArticle from "@/data/article"
import createHue from "@/utils/create-hue"

const components = {
  img({ node, ...props }) {
    return (
      <div className="relative w-full h-[500px]">
        <Image layout="fill" objectFit="contain" {...props} />
      </div>
    )
  },

  ol({ node, ...props }) {
    return <ol className="list-decimal m-[revert] p-[revert] mb-3" {...props} />
  },

  ul({ node, ...props }) {
    return <ul className="list-disc m-[revert] p-[revert] mb-3" {...props} />
  },

  li({ node, ...props }) {
    return (
      <li
        className="text-lg md:text-xl mt-1 md:mt-3 text-gray-700 dark:text-gray-300"
        {...props}
      />
    )
  },

  h2({ node, className, ...props }) {
    return (
      <h2
        className={`${className} text-3xl sm:text-4xl font-headline font-semibold my-6`}
        {...props}
      />
    )
  },

  h3({ node, className, ...props }) {
    return (
      <h3
        className={`${className} text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 font-headline font-semibold my-5`}
        {...props}
      />
    )
  },

  p({ node, children, className, ...props }) {
    return children[0]?.props?.src ? (
      <div className={className} {...props}>
        {children}
      </div>
    ) : (
      <p
        className="m-[revert] text-gray-700 text-lg md:text-xl dark:text-gray-300 font-body font-normal tracking-body"
        {...props}
      >
        {children}
      </p>
    )
  },

  strong({ node, ...props }) {
    return <strong className="text-gray-700 dark:text-gray-300" {...props} />
  },

  a({ node, className, ...props }) {
    return (
      <a
        rel="noopener noreferrer"
        className={`${className} text-purple-700 dark:text-purple-400 underline hover:no-underline`}
        {...props}
      />
    )
  },

  code({ node, inline, className, children, ...props }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { theme } = useTheme()
    const match = /language-(\w+)/.exec(className || "")

    return !inline && match ? (
      <SyntaxHighlighter
        codeTagProps={{ className: "font-code", ...props }}
        style={theme === "dark" ? vscDarkPlus : ghcolors}
        language={match[1]}
        PreTag="div"
        customStyle={{ margin: "1.5rem 0" }}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props} />
    )
  }
}

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
        <div className="mt-4 mb-10 m-auto max-w-full flex flex-wrap gap-6">
          {article.tags.map((tag, index) => (
            <em
              key={tag}
              style={{
                backgroundColor: `hsl(${createHue(index)}, 90%, 83%)`
              }}
              className="p-1 font-body tracking-body text-sm"
            >
              #{tag}
            </em>
          ))}
        </div>
      </section>

      <ReactMarkdown
        remarkPlugins={[gfm]}
        components={components}
        className="max-w-[80ch] m-auto text-gray-900 dark:text-gray-100 transition-colors"
        linkTarget="_blank"
        skipHtml
      >
        {article.body_markdown}
      </ReactMarkdown>
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
