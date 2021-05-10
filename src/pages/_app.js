import Head from "next/head";
import Layout from "@/components/Layout";

import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/400-italic.css";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="I’m a full-stack web developer with love and enthusiasm for creating and experimenting with modern web technologies. I specialize mostly on frontend technologies specifically in the React ecosystem"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
