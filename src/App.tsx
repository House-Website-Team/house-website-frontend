import { BrowserRouter, Route, Routes } from "react-router";

import { HomePage } from "../src/pages/HomePage";
import { RegPage } from "./pages/RegPage";

import "./app/styles/reset.css";
import "./app/styles/global.css";
import "./app/styles/fonts.css";

export const App = () => {
  return (
    <BrowserRouter basename="/house-website-frontend/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reg" element={<RegPage />} />
      </Routes>
    </BrowserRouter>
  );
};
