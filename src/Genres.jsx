import NamePage from './NamePage';
import './style/Genres.css'

function Genres() {
    return (
     

        <div className='genres-buttons'>
        <NamePage name='Жанры'/>
          <div className='row'>
            <div className='genres bg-scenery'><div className='shade_box'><p className='textbutton'>Пейзажи</p></div></div>
            <div className='genres bg-portret' ><div className='shade_box'><p className='textbutton'>Портреты</p></div></div>
            <div className='genres bg-still-life'><div className='shade_box'><p className='textbutton'>Натюрморты</p></div></div>
            <div className='genres bg-history'><div className='shade_box'><p className='textbutton'>Историческая живопись</p></div></div>
            <div className='genres bg-abstraction'><div className='shade_box'><p className='textbutton'>Абстракция</p></div></div>
            <div className='genres bg-genre-paint'><div className='shade_box'><p className='textbutton'>Жанровая живопись</p></div></div>
          </div>
          
        </div>

    );
  }
  
  export default Genres;
  