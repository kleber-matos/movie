import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/page/Home/Home";
import Movie from "../src/page/Movie/Movie";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
