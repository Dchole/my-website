import base64 from "base-64"

const addTitle = gists => {
  const snippets = [...gists]

  snippets.forEach((gist, index) => {
    switch (index) {
      case 0:
        gist.title = "useDebounce Hook"
        break

      case 1:
        gist.title = "Material ButtonLink"
        break

      case 2:
        gist.title = "Error Handling"
        break

      case 3:
        gist.title = "Device Detection Hook"
        break

      default:
        break
    }
  })

  return snippets
}

const getGists = async () => {
  const gists = await fetch("https://api.github.com/gists", {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `Basic ${base64.encode(
        `dchole:${process.env.GITHUB_TOKEN}`
      )}`
    }
  }).then(res => res.json())

  return addTitle(gists.slice(1, 5))
}

export default getGists
