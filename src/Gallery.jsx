// import './style/Genres.css'
import { Link } from 'react-router-dom';
import './style/Gallery.css'

const Gallery = () => {
    return (
     
      <div className="back">
        <div className='picture-notes'>
        <header className="name-page" >Галерея</header>
          <div className='row-notes'>
            <div className="note"><div className="img"/>
              <div className="description">
                <div className='headerNote'>"Звездная ночь"</div>
                <p className='desText'>Aвтор: Ван Гог</p>
                <p className='desText'>Жанр: Пейзаж</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Gallery;