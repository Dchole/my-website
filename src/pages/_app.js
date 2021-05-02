import Layout from "@/components/Layout";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
