import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// components
import Navbar from "./components/common/NavBar";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import CovidWorldWide from "./components/CovidWorldWide";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:id" element={<CountryDetails />} />
        <Route path="/worldwide" element={<CovidWorldWide />} />
        <Route path="/*" element={<Navigate to="/countries" />} />
      </Routes>
    </div>
  );
};

export default App;
