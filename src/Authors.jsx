import './style/Authors.css'
import { Link } from 'react-router-dom';

const Authors = () => {
    return (
     

        <div className='authors-buttons'>
        <header className="name-page" >Авторы</header>
          <div className='row'>
            <div className='authors bg-leonardodavinchi'><div className='shade_box'><p className='textbutton'>Леонардо да Винчи</p></div></div>
            <div className='authors bg-vangog' ><div className='shade_box'><p className='textbutton'>Ван Гог</p></div></div>
            <div className='authors bg-claudemonet'><div className='shade_box'><p className='textbutton'>Клод Моне</p></div></div>
            <div className='authors bg-pablopicaso'><div className='shade_box'><p className='textbutton'>Пабло Пикассо</p></div></div>
            <div className='authors bg-michelangelobuanorotti'><div className='shade_box'><p className='textbutton'>Микеланджело Буонарроти</p></div></div>
            <div className='authors bg-rembrantrein'><div className='shade_box'><p className='textbutton'>Рембрандт ван Рейн</p></div></div>
            <div className='authors bg-salvadordali'><div className='shade_box'><p className='textbutton'>Сальвадор Дали</p></div></div>
            <div className='authors bg-gustavklimt' ><div className='shade_box'><p className='textbutton'>Густав Климт</p></div></div>
            <div className='authors bg-edwardmunk'><div className='shade_box'><p className='textbutton'>Эдвард Мунк</p></div></div>
            <div className='authors bg-jacksonpollock'><div className='shade_box'><p className='textbutton'>Джексон Поллок</p></div></div>
            <div className='authors bg-fridakahlo'><div className='shade_box'><p className='textbutton'>Фрида Кало</p></div></div>
            <div className='authors bg-anrimatiss'><div className='shade_box'><p className='textbutton'>Анри Матисс</p></div></div>
          </div>
          
        </div>

    );
  }
  
  export default Authors;
  