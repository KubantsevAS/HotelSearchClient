import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import HotelsPage from "./pages/HotelsPage";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
      </Routes>
    </div>
  );
}
