import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Derek Oware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        id="hero"
        className="h-screen w-full bg-waves-light bg-cover bg-no-repeat"
      >
        <section
          id="intro"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="mb-4">
            <p className="text-2xl text-right italic font-body">Hey 👋, I'm</p>
            <h1 className="text-8xl text-black text-center font-display font-bold">
              Derek Oware
            </h1>
            <h2 className="text-4xl leading-relaxed">
              Full-Stack Web Developer
            </h2>
            <p className="text-lg text-gray-700 font-body italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              a magni, deleniti porro sed aliquam repellendus impedit itaque est
              quibusdam aspernatur fugit provident. Dolorum iusto natus ad minus
              distinctio quisquam.
            </p>
          </div>
          <button className="py-2 px-4 text-white font-body font-bold bg-purple-600 hover:bg-purple-500 transition-colors">
            Contact Me
          </button>
        </section>
      </div>
    </>
  );
}
