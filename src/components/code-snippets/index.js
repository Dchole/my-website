import PropTypes from "prop-types"

const Snippets = ({ snippets }) => {
  return (
    <section
      id="snippets"
      aria-labelledby="snippets-title"
      className="container max-w-screen-lg mt-8 mb-10 m-auto"
    >
      <h3
        id="snippets-title"
        className="text-center text-2xl sm:text-3xl text-gray-900 dark:text-gray-100 font-headline font-semibold mb-5"
      >
        Code Snippets
      </h3>
      <div className="flex gap-5 flex-wrap lg:flex-nowrap">
        {snippets.map(snippet => (
          <a
            key={snippet.id}
            href={snippet.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby={snippet.node_id}
            className="p-3 w-full sm:w-[48%] dark:bg-gray-800 border border-gray-200 dark:border-gray-900 border-solid rounded-lg hover:bg-purple-50 dark:hover:bg-gray-600 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:bg-purple-50 dark:focus:bg-gray-600 focus:shadow-lg focus:-translate-y-1 active:bg-purple-100 dark:active:bg-gray-900 active:translate-y-0 active:shadow-none transform transition"
          >
            <h4
              id={snippet.node_id}
              className="text-lg text-gray-800 dark:text-gray-200 font-headline mb-1"
            >
              {snippet.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-body tracking-wide">
              {snippet.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

Snippets.prototype = {
  snippets: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Snippets
