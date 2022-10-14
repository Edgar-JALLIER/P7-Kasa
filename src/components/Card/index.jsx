import "../../styles/Card.scss"
import { Link } from 'react-router-dom'
import { appartementList } from "../../datas/datas.js";

function Card () {
    return (
            <ul className="Card_structure">
                {appartementList.map (({title, id, cover}) => (
                    <li className="Card_aspect" key={id}>
                        <Link to ={`/Logement/${id}`}>
                        <div className="Card_aspect_color"></div>
                        <h2 className="Card_aspect_title">{title}</h2>
                        <img className="Card_aspect_img" src={cover} alt={title} />
                        </Link>
                        
                    </li>
                ))}
            </ul>
    )
}

export default Card