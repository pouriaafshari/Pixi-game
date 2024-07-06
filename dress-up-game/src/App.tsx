import React from "react";
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from "./Game";
import Menu from "./Menu";

const App: React.FC = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/game" element={<Game/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;