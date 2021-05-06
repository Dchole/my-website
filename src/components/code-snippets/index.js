import Link from "next/link";

const Snippets = ({ snippets }) => {
  return (
    <section
      id="snippets"
      className="container max-w-screen-lg mt-8 mb-10 m-auto"
    >
      <h3 className="text-center text-4xl text-gray-900 font-headline font-semibold mb-5">
        Code Snippets
      </h3>
      <div className="flex gap-5">
        {snippets.map(snippet => (
          <a
            key={snippet.id}
            href={snippet.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gray-200 border-solid rounded-lg hover:bg-purple-50 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:bg-purple-50 focus:shadow-lg focus:-translate-y-1 active:bg-purple-100 active:translate-y-0 active:shadow-none transform transition"
          >
            <h4 className="text-lg text-gray-800 font-headline mb-1">
              {snippet.title}
            </h4>
            <p className="text-gray-600 text-sm font-body tracking-wide">
              {snippet.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Snippets;
