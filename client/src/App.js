import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StateSelectionMap from "./components/main_map/Map";
import NewYork from "./components/states/NewYork";
import Mississippi from "./components/states/Mississippi";
import California from "./components/states/California";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<StateSelectionMap />} />
          <Route path="/NewYork" element={<NewYork />} />
          <Route path="/Mississippi" element={<Mississippi />} />
          <Route path="/California" element={<California />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
