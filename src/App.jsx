import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/Home';
import SortingPage from './components/SortingPage';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Nav />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorting" element={<SortingPage />} />
        </Routes>
      </main>
      {/* <SortingPage /> */}
    </div>
  );
}

export default App
