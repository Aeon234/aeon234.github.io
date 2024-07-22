import { NavBar } from "./Components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
