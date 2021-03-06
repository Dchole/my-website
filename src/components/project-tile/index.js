import PropTypes from "prop-types"
import Image from "next/image"
import ExternalLink from "@/components/icons/external-link"
import Github from "@/components/icons/github"
import useExtraSmall from "./useMobile"
import { useTheme } from "../theme/ThemeContext"

const ProjectTile = ({ project, reversed }) => {
  const { title, description, cover, source, demo, stack } = project
  const { theme } = useTheme()
  const xs = useExtraSmall()

  return (
    <section
      className={`flex flex-col sm:flex-row gap-16 items-center ${
        reversed ? "sm:flex-row-reverse" : ""
      }`}
    >
      <div className="w-[100%] h-[250px] sm:w-[50%] sm:h-[300px] relative">
        <Image
          src={cover}
          alt={title}
          layout="fill"
          objectFit="contain"
          placeholder="blur"
          blurDataURL={cover}
        />
      </div>
      <div
        className={`space-y-6 sm:max-w-[50%] flex flex-col items-start ${
          reversed ? "sm:items-start" : "sm:items-end"
        }`}
      >
        <h2 className="text-5xl text-gray-900 leading-normal dark:text-gray-100 font-headline font-bold">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 font-body tracking-body space-y-4">
          {description.split("\n").map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </p>
        <ul className="flex items-center justify-center gap-12">
          {stack.map(({ name, url, icon, ...rest }) => (
            <li key={name}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={
                    /*  Toggle between dark and light icons */
                    !rest.dark_mode_icon // Check if stack object has "dark-mode-icon" property
                      ? icon // If it doesn't, always use the "icon" property
                      : theme === "dark" // Else check if we've toggled dark mode
                      ? rest.dark_mode_icon // If we have, use the dark mode icon
                      : icon // If not, use the default icon
                  }
                  alt={name}
                  width={name === "Next" ? 50 : 40}
                  height={name === "Next" ? 50 : 40}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-end gap-8">
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 dark:text-purple-300 text-md font-body tracking-body flex justify-between items-center gap-1"
              aria-label={`view ${title}'s source code`}
            >
              {xs ? "Source Code" : "View Source Code"}{" "}
              <span className="transform scale-60">
                <Github />
              </span>
            </a>
          )}
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50 dark:text-gray-900 bg-purple-700 hover:bg-purple-500 dark:bg-gray-100 dark:hover:bg-purple-200 py-2 px-4 text-md font-body font-medium tracking-body flex justify-between items-center gap-1 transition-colors"
            aria-label={`visit ${title}`}
          >
            Visit Site{" "}
            <span className="transform scale-60">
              <ExternalLink />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

ProjectTile.prototype = {
  project: PropTypes.object.isRequired,
  reversed: PropTypes.bool
}

export default ProjectTile
