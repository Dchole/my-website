import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="dark">
        <Head />
        <body className="bg-white dark:bg-gray-900 transition-colors">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
