import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SharedLayout;
