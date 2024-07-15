import { NavBar } from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
