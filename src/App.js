import './style/App.css';
import './style/general.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Genres from './Genres.js'
import Authors from './Authors.js';
function App() {
  
  return (
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Genres" element={<Genres />} />
          <Route path="/Authors" element={<Authors />} />
        </Routes>
      </Router>
    
  );
}

export default App;
