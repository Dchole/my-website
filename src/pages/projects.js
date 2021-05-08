import { promises as fs } from "fs";
import path from "path";
import Head from "next/head";
import ProjectTile from "@/components/project-tile";

const Projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Made by Derek Oware</title>
        <meta name="description" content="Few of my best projects I've built" />
      </Head>

      <div className="container max-w-screen-lg m-auto">
        <h1 className="sr-only">My Projects</h1>

        <div className="mt-32">
          {projects.map((project, index) => (
            <ProjectTile
              key={project.title}
              project={project}
              position={index === 1 && "right"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "src/data");
  const projects = await fs.readFile(
    path.join(postsDirectory, "projects.json"),
    "utf-8"
  );

  return { props: { projects: JSON.parse(projects) } };
};

export default Projects;