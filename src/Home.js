import './style/Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
     
      <div className="Home">
        <div className='head'>
          <header className="Header"><Link to="/" className="linkStyle">Simple Gallery</Link></header>
        </div>
        <div className="Buttons">
            <div className="Bgallery">
                  
            </div>
            <div className='Flex'> 
            <div className="Bauthors">
    
            </div>
            <div className="Bgenre">
              
            </div>
            </div>
        </div>
        <footer className='footer'><Link to="https://github.com/kaciel13" className="linkStyle">@kaciel13</Link></footer>
        <footer className='year'>2025</footer>
      </div>
    );
  }
  
  export default Home;
  