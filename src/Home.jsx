import {Link} from 'react-router-dom';

import './style/Home.css'

const Home = () => {
    return (
        <div className='buttons'>
            <div className='gallery'><Link to="/simplegallery/gallery" className="link"><div className='shade_box'><p className='textbutton'>Перейти в галлерию...</p></div></Link></div>
            <div className='lowbuttons'>
                <div className='genre'><Link to="/simplegallery/genres" className='link'><div className='shade_box'><p className='textbutton'>Перейти к жанрам...</p></div></Link></div>
                <div className='author'><Link to="/simplegallery/authors" className='link'><div className='shade_box'><p className='textbutton'>Перейти к авторам...</p></div></Link></div>
            </div>
        </div>
    );
  }
  
  export default Home;
  