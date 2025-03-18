
import { Link } from 'react-router-dom';
import './style/Head.css';

const Header = () => {
    return (
        <div className='head'>
            <header className="Header">
                <Link to="/" className="linkStyle">Simple Gallery</Link>
            </header>
        </div>
    );
};

export default Header;
