import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import MainPage from "./components/pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FavoritesPage from "./components/pages/FavoritesPage";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
