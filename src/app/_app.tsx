import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyPage from './page';
import ASCIITOWNPage from './asciitown/page';
import WhoAmIPage from './whoami/page';
import { BrowserRouter } from "react-router-dom";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/asciitown" element={<ASCIITOWNPage />} />
        <Route path="/whoami" element={<WhoAmIPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;