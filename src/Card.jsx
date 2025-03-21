
import "./style/Card.css";
const Card = () => {
    return (
        <div className="back">
            <div className='backCard'>
                <div className="bgCard">
                    <div className='imgCard'><div className="image"/></div>
                    <div className='comment'>
                        <div className="comName">Звездная ночь</div>
                        <div className="comAuthor">Винсент Ван Гог</div>
                        <div className="comm">
                        Звёздная ночь — картина, написанная в июне 1889 года известным нидерландским художником, постимпрессионистом Винсентом Ван Гогом. Сюжет картины был навеян видом из окна приюта Сен-Поль-де-Мозоль в Сен-Реми, на юге Франции. Там художник жил в период с 1889 по 1890 год. Картина хранится в Нью-Йоркском музее современного искусства. Техника выполнения — масло. Размеры холста 73,7 х 92,1
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    );
};

export default Card;