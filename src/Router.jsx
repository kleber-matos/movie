/** @format */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/page/Home/Home";
import Movie from "../src/page/Movie/Movie";
import Seach from "./page/Seach/Seach";
import Series from "./page/Series/Series";
import PlaySerie from "./page/playSerie/PlaySerie";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/tv/:id" element={<PlaySerie />} />
          <Route path="/seach" element={<Seach />} />
          <Route path="/tv/" element={<Series />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
