import './style/Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
     
      <div className="Home">
        <div className='head'>
          <header className="Header"><Link to="/" className="linkStyle">Simple Gallery</Link></header>
        </div>
        <div className='buttons'>
          <div className='gallery'><div className='text'>Перейти в галлерию...</div></div>

          <div className='lowbuttons'>
            <div className='genre'><div className='text'>Перейти к жанрам...</div></div>
            <div className='author'><div className='text'>Перейти к авторам...</div></div>
          </div>
          
        </div>
      
        <footer className='footer'><Link to="https://github.com/kaciel13" className="linkStyle">@kaciel13</Link></footer>
      </div>
    );
  }
  
  export default Home;
  