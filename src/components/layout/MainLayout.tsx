import { Outlet } from "react-router-dom";
import Navbar from "../../pages/navbar/MenuBar";
import Footer from "../../pages/footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#F0F2F2]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
