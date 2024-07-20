import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Pages/Home";
import { NoChill_RosterApp } from "./Pages/NoChill_RosterApp";

// My Components
import { NavBar } from "./Components/NavBar";
import { BlizzButton } from "./Components/BlizzButton";
import { Blog_Post } from "./Pages/Blog_Post";
import { Login } from "./Pages/Login";
// // Images
// import Aeon_Logo from "../assets/Logo.ico";
// import NoChill_Logo from "../assets/NoChill.ico";

function App() {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/NoChill_Roster" element={<NoChill_RosterApp />} />
          <Route path="/Blog_Post" element={<Blog_Post />} />
          <Route path="/post/:postID" element={<Blog_Post />} />
          <Route path="/Login" element={user ? <Home /> : <Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
