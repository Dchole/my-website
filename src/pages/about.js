import Head from "next/head"

const About = () => {
  return (
    <>
      <Head>
        <title>About Derek Oware</title>
      </Head>

      <div className="container max-w-screen-md m-auto pt-24">
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
          I’ve been a developer for about 3 years and it has been a fulfilling
          experience. I’ve started a blog on dev.to and hashnode to share my
          experience and tips I find on my journey with the dev community.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-300 font-body tracking-body">
          I started my journey with HTML5 canvas and then jumped into React.
          I've been in the React ecosystem ever since.
        </p>
      </div>
    </>
  )
}

export default About
