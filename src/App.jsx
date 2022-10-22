import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ModifyPage from './pages/ModifyPage';
import ResultPage from './pages/ResultPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/modify" element={<ModifyPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
