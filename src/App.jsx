import "./App.css";
import { Layout } from "./Layout";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

// My Components
import { NavBar } from "./Components/NavBar";
import { BlizzButton } from "./Components/BlizzButton";
// My Pages
import { Home } from "./Pages/Home";
import { Blog_Post } from "./Pages/Blog_Post";
import { Create_BlogPost } from "./Pages/Create_BlogPost";
import { NoChill_RosterApp } from "./Pages/NoChill_RosterApp";
import { Login } from "./Pages/Login";
// // Images
// import Aeon_Logo from "../assets/Logo.ico";
// import NoChill_Logo from "../assets/NoChill.ico";

function App() {
  let token;
  useEffect(() => {
    token = sessionStorage.getItem("User");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  });

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/NoChill_Roster" element={<NoChill_RosterApp />} />
          <Route path="/create_post" element={<Create_BlogPost />} />
          <Route path="/post/:id" element={<Blog_Post />} />
          <Route path="/Login" element={token ? <Home /> : <Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
