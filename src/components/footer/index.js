import Links from "./Links"

const Footer = () => {
  return (
    <footer className="px-4 lg:px-0 mt-16 bg-gray-100 dark:bg-gray-800 pt-12 pb-8 transition-colors">
      <h2 className="sr-only">Footer Navigation</h2>
      <Links />
      <a
        href="#skip-to-nav"
        className="text-gray-50 dark:text-gray-900 bg-gray-900 dark:bg-gray-100 fixed -bottom-80 focus:bottom-0 right-0"
      >
        Back to top
      </a>
    </footer>
  )
}

export default Footer
