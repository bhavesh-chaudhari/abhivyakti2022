import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="content">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
