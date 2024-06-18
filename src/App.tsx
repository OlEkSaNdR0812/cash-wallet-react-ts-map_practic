import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ThreeScene from "components/map/Map";

function App() {
  return (
    <Routes>
      <Route path="/map" element={<ThreeScene />} />
    </Routes>
  );
}

export default App;
