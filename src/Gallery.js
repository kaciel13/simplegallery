import './style/Genres.css'
import { Link } from 'react-router-dom';
import './style/Gallery.css'
function Gallery() {
    return (
     
      <div className="back">
        <div className='head'>
          <header className="Header"><Link to="/" className="linkStyle">Simple Gallery</Link></header>
        </div>
        <div className='picture-notes'>
        <header className="name-page" >Галерея</header>
          <div className='row-notes'>
            <div className="note"><div className="img"/></div>
            <div className="note"><div className="img"/><div className="description"><p>Aвтор: Ван Гог</p></div></div>
            <div className="note"><div className="img"/></div>
            <div className="note"><div className="img"/></div>
            <div className="note"><div className="img"/></div>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Gallery;