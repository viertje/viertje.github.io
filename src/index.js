import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Hotels from "./pages/Hotels";
import Fluege from "./pages/Fluege";
import Buchungen from "./pages/Buchungen";
import Meetings from "./pages/Meetings";
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="fluege" element={<Fluege />} />
          <Route path="buchungen" element={<Buchungen />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path=":hotelLocation" element={<Hotels />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);