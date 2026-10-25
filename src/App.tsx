import { BrowserRouter, Route, Routes } from "react-router";

import { HomePage } from "../src/pages/HomePage";

import "./app/styles/reset.css";
import "./app/styles/global.css";
import "./app/styles/fonts.css";

export const App = () => {
  return (
    <BrowserRouter basename="/house-website-frontend/">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
