import './style/Home.css'
import { Link} from 'react-router-dom';

function Home() {
    return (
     
      <div className="back">
        <div className='head'>
          <header className="Header"><Link to="/" className="linkStyle">Simple Gallery</Link></header>
        </div>
        <div className='buttons'>
          <div className='gallery'><Link to="/Gallery" className="link"><div className='shade_box'><p className='textbutton'>Перейти в галлерию...</p></div></Link></div>

          <div className='lowbuttons'>
            <div className='genre'><Link to="/Genres" className='link'><div className='shade_box'><p className='textbutton'>Перейти к жанрам...</p></div></Link></div>
            <div className='author'><Link to="/Authors" className='link'><div className='shade_box'><p className='textbutton'>Перейти к авторам...</p></div></Link></div>
          </div>
          
        </div>
      
        
      </div>
    );
  }
  
  export default Home;
  