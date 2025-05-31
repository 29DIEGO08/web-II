import MenuLateral from "../components/MenuLateral";
import { Outlet } from "react-router-dom";
import "../index.css";

const Layout = () => {
  return (
    <div className="layout">
      <MenuLateral />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;