import './style/App.css';
import './style/general.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Genres from './Genres.js'
function App() {
  
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Genres" element={<Genres />} />
        </Routes>
      </Router>
    
  );
}

export default App;
