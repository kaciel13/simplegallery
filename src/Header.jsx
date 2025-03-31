import { Link } from 'react-router-dom';
import './style/Head.css';
import { useState } from 'react';

const Header = ({ isGenres = true, isGallery = true, isAuthors = true, isNotMain = true }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const openMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='head'>
            <header className="Header">
                <Link to="/simplegallery/" className="linkStyle">Simple Gallery</Link>
            </header>
            {isNotMain && (
                <>
                    <button className='nav-button' onClick={openMenu}>
                        <div className='menu-img' />
                    </button>
                    {menuOpen && (
                        <div className="nav-menu">
                            <button className='close-but' onClick={openMenu}/>
                            {isGallery && <Link to="/simplegallery/gallery" className="nav-menu-but">Галерея</Link>}
                            {isGenres && <Link to="/simplegallery/genres" className="nav-menu-but">Жанры</Link>}
                            {isAuthors && <Link to="/simplegallery/authors" className="nav-menu-but">Авторы</Link>}
                        </div>
                    )}
            <div className="nav-links">
                {isGallery && <Link to="/simplegallery/gallery" className="nav-link">Галерея</Link>}
                {isGenres && <Link to="/simplegallery/genres" className="nav-link">Жанры</Link>}
                {isAuthors && <Link to="/simplegallery/authors" className="nav-link">Авторы</Link>}
            </div>
            </>
            )}
        </div>
    );
};

export default Header;
