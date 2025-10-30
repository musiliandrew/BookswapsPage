import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import './App.css'; // Keep if you have global styles

function App() {
  return (
    <Router>
      <Routes>
        {/* Home / Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* Optional: Future routes (static fallbacks) */}
        <Route
          path="/login"
          element={
            <div className="flex items-center justify-center min-h-screen text-2xl">
              Login page coming soon!
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="flex items-center justify-center min-h-screen text-2xl">
              Sign up page coming soon!
            </div>
          }
        />

        {/* Catch-all: Redirect to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;