import Header from "../components/Header/Header.js";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Header />
        <div className=" w-full px-32">
        <Outlet />
        </div>
        
    </>
  )
};

export default Layout;
