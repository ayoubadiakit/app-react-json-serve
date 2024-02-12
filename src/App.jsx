import React, { useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBlog from "./components/AddBlog";
import DetailBlog from "./components/DetailBlog";
function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/create" element={<AddBlog />} />
          <Route path="/blogs/:id" element={<DetailBlog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
