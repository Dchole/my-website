import Footer from "../footer";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-4 lg:mx-0">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
