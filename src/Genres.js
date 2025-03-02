import './style/Genres.css'
import { Link } from 'react-router-dom';
function Genres() {
    return (
     
      <div className="back">
        <div className='head'>
          <header className="Header"><Link to="/" className="linkStyle">Simple Gallery</Link></header>
        </div>
        <div className='genres-buttons'>
        <header className="name-page" >Жанры</header>
          <div className='row'>
            <div className='genres bg-scenery'><div className='shade_box'><p className='textbutton'>Пейзажи</p></div></div>
            <div className='genres bg-portret' ><div className='shade_box'><p className='textbutton'>Портреты</p></div></div>
            <div className='genres bg-still-life'><div className='shade_box'><p className='textbutton'>Натюрморты</p></div></div>
            <div className='genres bg-history'><div className='shade_box'><p className='textbutton'>Историческая живопись</p></div></div>
            <div className='genres bg-abstraction'><div className='shade_box'><p className='textbutton'>Абстракция</p></div></div>
            <div className='genres bg-genre-paint'><div className='shade_box'><p className='textbutton'>Жанровая живопись</p></div></div>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Genres;
  