// import './style/Genres.css'
import { Link } from 'react-router-dom';
import './style/Gallery.css'

const Gallery = () => {
    return (

        <div className='picture-notes'>
        <header className="name-page" >Галерея</header>
          <div className='row-notes'>
            
            <Link to={'/Card'} className="note"><div className="img"/>
              <div className="description">
                <div className='headerNote'>"Звездная ночь"</div>
                <p className='desText'>Aвтор: Ван Гог</p>
                <p className='desText'>Жанр: Пейзаж</p>
              </div>
            </Link>
            <Link to={'/Card'} className="note"><div className="img"/>
              <div className="description">
                <div className='headerNote'>"Звездная ночь"</div>
                <p className='desText'>Aвтор: Ван Гог</p>
                <p className='desText'>Жанр: Пейзаж</p>
              </div>
            </Link>
            <Link to={'/Card'} className="note"><div className="img"/>
              <div className="description">
                <div className='headerNote'>"Звездная ночь"</div>
                <p className='desText'>Aвтор: Ван Гог</p>
                <p className='desText'>Жанр: Пейзаж</p>
              </div>
            </Link>
            <Link to={'/Card'} className="note"><div className="img"/>
              <div className="description">
                <div className='headerNote'>"Звездная ночь"</div>
                <p className='desText'>Aвтор: Ван Гог</p>
                <p className='desText'>Жанр: Пейзаж</p>
              </div>
            </Link>
            <Link to={'/Card'} className="note"><div className="img"/>
              <div className="description">
                <div className='headerNote'>"Звездная ночь"</div>
                <p className='desText'>Aвтор: Ван Гог</p>
                <p className='desText'>Жанр: Пейзаж</p>
              </div>
            </Link>
           
          </div>
        </div>
        

    );
  }
  
  export default Gallery;