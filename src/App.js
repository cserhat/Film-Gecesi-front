import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/uye-ol';
import Login from './pages/giris-yap';
import Filmler from './pages/filmler';
import Film from './pages/film'; 
import Navbar from './components/navbar';
import './assets/css/main.css';
import './assets/css/media_query.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Filmler/>} />
          <Route path="/uye-ol" element={<Register />} />
          <Route path="/giris-yap" element={<Login />} />
          <Route path="/filmler/:slug" element={<Film />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
