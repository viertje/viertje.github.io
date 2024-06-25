import Footer from "../components/Footer/Footer.js";
import Header from "../components/Header/Header.js";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <div className="flex flex-col justify-between h-screen">
          <Header />
          <div className=" w-full px-32 mb-auto">
            <Outlet />
          </div>
          <Footer />
        </div>
    </>
  )
};

export default Layout;
