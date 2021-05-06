import Head from "next/head";
import Image from "next/image";
import ExternalLink from "@/components/icons/external-link";
import Github from "@/components/icons/github";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Made by Derek Oware</title>
        <meta name="description" content="Few of my best projects I've built" />
      </Head>

      <div className="container max-w-screen-lg m-auto">
        <h1 className="sr-only">My Projects</h1>

        <div className="mt-32">
          <section className="flex gap-12 items-center">
            <Image
              src="/catwiki.png"
              alt="Cat wiki Challenge"
              width={1150}
              height={875}
              objectFit="contain"
            />
            <div className="space-y-6">
              <h2 className="text-5xl text-gray-900 font-headline font-bold">
                CatWiki Challenge
              </h2>
              <p className="text-gray-600 font-body tracking-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                atque necessitatibus ratione natus commodi adipisci aperiam
                soluta magni, autem nostrum laboriosam vero voluptatum corporis
                rerum pariatur hic nihil eveniet id.
              </p>
              <ul className="flex items-center justify-center gap-12">
                <li>
                  <a
                    href="http://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/nextjs-black-logo.svg"
                      alt="Next JS"
                      width={50}
                      height={50}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="http://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/material-ui.svg"
                      alt="Material UI"
                      width={35}
                      height={35}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="http://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/graphql.svg"
                      alt="GraphQL"
                      width={35}
                      height={35}
                    />
                  </a>
                </li>
              </ul>
              <div className="flex justify-end gap-8">
                <a
                  href="https://cat-wiki-challenge.vercel.app/"
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
                  href="https://cat-wiki-challenge.vercel.app/"
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
        </div>
      </div>
    </>
  );
};

export default Projects;
