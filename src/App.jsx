import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dlogin from "./Dlogin";
import Callback from "./Callback";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dlogin />} />
          <Route path="/callback" element={<Callback />} />

          {/* Add other routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
