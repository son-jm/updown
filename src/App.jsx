// src/App.jsx
import { Routes, Route } from "react-router-dom";
import StartPage from "../pages/StartPage";
import EasyPage from "../pages/EasyPage";
import NormalPage from "../pages/NormalPage";
import HardPage from "../pages/HardPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/easy" element={<EasyPage />} />
      <Route path="/normal" element={<NormalPage />} />
      <Route path="/hard" element={<HardPage />} />
    </Routes>
  );
}
