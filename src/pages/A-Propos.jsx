import BannerApropos from "../components/Banner/Banner_A-Propos";
import DropdownApropos from "../components/Dropdown/A-Propos_Dropdown";
import {accordionData} from "../datas/datas-accordion"
import "../styles/Dropdown_A-propos.scss"

function Apropos() {
    return (<div>
        <BannerApropos />
        <div className="Dropdown_position"> 
            {accordionData.map (({title, content}) => ( 
            <DropdownApropos title ={title} content={content} />
            ))}
        </div>
    </div>)
}

export default Apropos