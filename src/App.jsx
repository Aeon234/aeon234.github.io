import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Pages/Home";
import { NoChill_RosterApp } from "./Pages/NoChill_RosterApp";
// My Components
import { NavBar } from "./Components/NavBar";
import { BlizzButton } from "./Components/BlizzButton";
// // Images
// import Aeon_Logo from "../assets/Logo.ico";
// import NoChill_Logo from "../assets/NoChill.ico";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/NoChill_Roster" element={<NoChill_RosterApp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
