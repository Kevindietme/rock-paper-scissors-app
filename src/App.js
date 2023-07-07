import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Choose from "./pages/Choose";
import './styles/App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
<Route path="/" element= { <Choose setSelectedItem={setSelectedItem} selectedItem={selectedItem}/> } /> 

        </Routes>
      </BrowserRouter>
  );
}

export default App;
