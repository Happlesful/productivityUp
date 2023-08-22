import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Footer,
  Header,
  Index,
  Navbar,
  Sidebar,
  ThemeSettings,
} from "./components";
import {
  Home,
  About,
  Inspiration,
  Productivity,
  Time,
  Settings,
} from "./pages";
import "./App.css";

const App = () => {
  // const [activeMenu, setactiveMenu] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        {/* Routes for Pages */}
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Inspiration" element={<Inspiration />}></Route>
        <Route path="/Productivity" element={<Productivity />}></Route>
        <Route path="/Time" element={<Time />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
