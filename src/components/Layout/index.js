import Footer from "../footer";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <>
      <a href="#main" className="absolute -top-80">
        Skip to content
      </a>
      <Header />
      <main id="main" className="mx-4 lg:mx-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
