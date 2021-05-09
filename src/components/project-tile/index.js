import Image from "next/image";
import ExternalLink from "@/components/icons/external-link";
import Github from "@/components/icons/github";

const ProjectTile = ({ project, reversed = false }) => {
  const { title, description, cover, source, demo, stack } = project;

  return (
    <section
      className={`flex gap-12 items-center ${
        reversed ? "flex-row-reverse" : ""
      }`}
    >
      <Image
        src={cover}
        alt={title}
        width={1150}
        height={875}
        objectFit="contain"
      />
      <div className="space-y-6">
        <h2 className="text-5xl text-gray-900 font-headline font-bold">
          {title}
        </h2>
        <p className="text-gray-600 font-body tracking-body">{description}</p>
        <ul className="flex items-center justify-center gap-12">
          {stack.map(({ name, url, icon }) => (
            <li key={name}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={icon}
                  alt={name}
                  width={name === "NextJS" ? 50 : 40}
                  height={name === "NextJS" ? 50 : 40}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-end gap-8">
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 text-md font-body tracking-body flex justify-between items-center gap-1"
          >
            View Source Code{" "}
            <span className="transform scale-60">
              <Github />
            </span>
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 text-md font-body tracking-body flex justify-between items-center gap-1"
          >
            Visit Site{" "}
            <span className="transform scale-60">
              <ExternalLink />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectTile;
