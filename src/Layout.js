import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function Layout() {

  return (
    <div>
      <NavBar />

      {/* An <Outlet> renders whatever child route is currently active in App.js */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;