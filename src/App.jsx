import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/Home';
import SortingPage from './components/SortingPage';
import AlgorithmPage from './components/AlgorithmPage';
import './App.css'
import BgImage from './assets/bg-img.jpg';

export default function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <Nav />
      <div className="min-h-screen"> 
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Algorithm" element={<AlgorithmPage />} />
            <Route path="/sorting" element={<SortingPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}