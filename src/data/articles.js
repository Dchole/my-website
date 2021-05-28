export const getArticles = async () =>
  fetch("https://dev.to/api/articles/me", {
    headers: {
      "api-key": process.env.DEV_API_KEY
    }
  }).then(res => res.json())

export const popularArticles = async () => {
  const articles = await getArticles()

  return articles
    .sort((a, b) => b.page_views_count - a.page_views_count) // Sort articles by page view count
    .slice(0, 3)
}

export const recentArticles = async () => {
  const articles = await getArticles()

  return articles.slice(0, 10)
}
