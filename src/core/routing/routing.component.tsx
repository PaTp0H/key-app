import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "../components";

import { Main } from "../../pages";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<>Page not found</>} />
      </Route>
    </Routes>
  );
};

export default Routing;
