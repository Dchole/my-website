import Head from "next/head"

const About = () => {
  return (
    <>
      <Head>
        <title>About Derek Oware</title>
      </Head>

      <article
        id="my-journey"
        className="container max-w-screen-md m-auto pt-24"
        aria-label="who I am and my journey to become a full-stack developer"
      >
        <h1 className="text-6xl text-gray-900 dark:text-gray-50 font-headline font-bold">
          About Me
        </h1>
        <p className="mt-5 text-gray-600 dark:text-gray-300 font-body tracking-body">
          I’m a full-stack web developer with love and enthusiasm for creating
          and experimenting with modern web technologies. I specialize mostly on
          frontend technologies specifically in the React ecosystem and also
          come along with web design writing in my skill set
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300 font-body tracking-body">
          I’ve been a developer for about 3 years, started as a hobbyist and
          spent my first 3 months creating canvas animations and browser games.
          I eventually decided to create an open blog for canvas developers and
          contributors to share their work and expertise, however that became my
          first failed attempt to building a real-world application. <br />
          Apparently, building a full functioning web app was way over my head{" "}
          <span role="image" aria-label="laughing emoji">
            😅
          </span>
          .
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300 font-body tracking-body">
          My next goal was to learn to build a full functioning web application.
          It was then I discovered{" "}
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 dark:text-purple-400"
          >
            React.js
          </a>{" "}
          in{" "}
          <a
            href="https://youtube.com/user/cs50tv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 dark:text-purple-400"
          >
            Harvard&apos;s cs50
          </a>{" "}
          program.
        </p>
      </article>
    </>
  )
}

export default About
