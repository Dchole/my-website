import Footer from "../footer";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <>
      <a id="skip-to-nav" href="#nav" className="absolute -top-80 focus:top-0">
        Skip to navigation
      </a>
      <a href="#main" className="absolute -top-80 focus:top-0">
        Skip to content
      </a>
      <Header />
      <main id="main" className="mx-4 lg:mx-0">
        {children}
      </main>
      <Footer />
      <a
        href="#skip-to-nav"
        className="fixed -bottom-80 focus:bottom-0 right-0"
      >
        Back to top
      </a>
    </>
  );
};

export default Layout;
