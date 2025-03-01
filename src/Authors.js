import './style/Authors.css'
import { Link } from 'react-router-dom';

function Authors() {
    return (
     
      <div className="back">
        <div className='head'>
          <header className="Header"><Link to="/" className="linkStyle">Simple Gallery</Link></header>
        </div>
        <div className='authors-buttons'>
          <div className='row'>
            <div className='authors bg-leonardodavinchi'><div className='shade_box'><p className='textbutton'>Леонардо да Винчи</p></div></div>
            <div className='authors bg-vangog' ><div className='shade_box'><p className='textbutton'>Ван Гог</p></div></div>
            <div className='authors bg-claudemonet'><div className='shade_box'><p className='textbutton'>Клод Моне</p></div></div>
            <div className='authors bg-pablopicaso'><div className='shade_box'><p className='textbutton'>Пабло Пикассо</p></div></div>
            <div className='authors bg-michelangelobuanorotti'><div className='shade_box'><p className='textbutton'>Микеланджело Буонарроти</p></div></div>
            <div className='authors bg-rembrantrein'><div className='shade_box'><p className='textbutton'>Рембрандт ван Рейн</p></div></div>
            <div className='authors bg-salvadordali'><div className='shade_box'><p className='textbutton'>Сальвадор Дали</p></div></div>
            <div className='authors bg-portret' ><div className='shade_box'><p className='textbutton'>Густав Климт</p></div></div>
            <div className='authors bg-still-life'><div className='shade_box'><p className='textbutton'>Эдвард Мунк</p></div></div>
            <div className='authors bg-history'><div className='shade_box'><p className='textbutton'>Джексон Поллок</p></div></div>
            <div className='authors bg-abstraction'><div className='shade_box'><p className='textbutton'>Фрида Кало</p></div></div>
            <div className='authors bg-genre-paint'><div className='shade_box'><p className='textbutton'>Анри Матисс</p></div></div>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Authors;
  