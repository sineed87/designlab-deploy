import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Read from './components/Read.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/read' element={<Read />} /> {/* Add route for Read component */}
        
      </Routes>
    </Router>
  </StrictMode>,
);
