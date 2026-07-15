import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nf from "./pages/Nf";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="*" element={<Nf></Nf>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
