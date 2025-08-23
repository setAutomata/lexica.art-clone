import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import "./Layout.css";

function Layout() {
  return (
    <>
      {/* =================== Header =================== */}
      <header>
        <Header />
      </header>
      {/* =================== Body ===================== */}
      <main className="mainBody">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
