import Head from "next/head"

const About = () => {
  return (
    <>
      <Head>
        <title>About Derek Oware</title>
      </Head>

      <article
        id="my-journey"
        className="container max-w-2xl m-auto pt-24"
        aria-label="who I am and my journey to become a full-stack developer"
      >
        <h1 className="text-6xl text-gray-900 dark:text-gray-50 font-headline font-bold">
          About Me
        </h1>
        <p className="mt-5 text-gray-600 dark:text-gray-300 font-body tracking-body">
          I’m a 20 years old web developer from{" "}
          <a
            href="https://www.google.com/maps/place/Takoradi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 dark:text-purple-400"
          >
            Takoradi, Ghana
          </a>{" "}
          with passion and motivation for creating software and experimenting
          with modern web technologies. I specialize mostly on frontend
          technologies specifically in the React ecosystem.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300 font-body tracking-body">
          I started web development back in 2018 on{" "}
          <a
            href="http://freecodecamp.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 dark:text-purple-400"
          >
            freecodecamp.org
          </a>
          . I spent my first 3 months creating canvas animations and browser
          games. I later attempted to create an platform for canvas developers
          and contributors to share their work and expertise, however that
          became my first failed project. <br />I then discovered React.js on{" "}
          <a
            href="https://youtube.com/user/cs50tv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 dark:text-purple-400"
          >
            Harvard&apos;s cs50 program
          </a>
          .
        </p>
      </article>
    </>
  )
}

export default About
