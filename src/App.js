
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./Team/Team";
import TeamDetails from "./TeamDetails/TeamDetails";
import LikedUsers from "./LikedUsers"; 
import NotFound from "./pages/NotFound";


import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="team/:id" element={<TeamDetails />} />
          <Route path="liked-users" element={<LikedUsers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
