import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../Library";
import Feed from "../Feed";
import Trending from "../Trending";
import Player from "../Player";
import Favourites from "../Favourites";
import "../Home/Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {
  return (
    <Router>
      <div className="home">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/player" element={<Player />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
