import Footer from "../footer";
import Header from "../header";
import ThemeProvider from "../theme/ThemeContext";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Header />
      <main id="main" className="mx-4 lg:mx-0">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
