import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style/App.css';

import Home from './Home';
import Foot from './Foot';
import Header from './Header';
import Gallery from './Gallery';
import Authors from "./Authors";
import Genres from "./Genres";
import Card from "./Card";
const App = () => {
  return (
    <>

      <div className='back'>
        <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/Authors" element={<Authors/>}/>
            <Route path="/Genres" element={<Genres/>}/>
            <Route path="/Card" element={<Card/>}/>
          </Routes>
        </Router>
      </div>
      <Foot />
    </>
  );
}

export default App;
