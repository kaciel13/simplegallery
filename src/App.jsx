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
          <Routes>
            <Route path="/simplegallery/" element={<><Header isNotMain={false} isGallery={false}/><Home /></>} />
            <Route path="/simplegallery/Gallery" element={<><Header isGallery={false}/><Gallery/></>}/>
            <Route path="/simplegallery/Authors" element={<><Header isAuthors={false}/><Authors/></>}/>
            <Route path="/simplegallery/Genres" element={<><Header isGenres={false}/><Genres/></>}/>
            <Route path="/simplegallery/Card" element={<><Header/><Card/></>}/>
          </Routes>
        </Router>
      </div>
      <Foot />
    </>
  );
}

export default App;
