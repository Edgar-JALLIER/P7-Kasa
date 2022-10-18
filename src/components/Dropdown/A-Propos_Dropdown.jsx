import "../../styles/Dropdown_A-propos.scss"
import { useState } from "react";
import fleche from "../../assets/Fleche-Dropdown.png"


function DropdownApropos ({title, content, id}) {
    const [isOpen , setIsOpen] = useState(false);
    return isOpen ? (
        <div className="Dropdown_open">
          <button className="Dropdown_button" onClick={() => setIsOpen(false)}>
            {title}
            <img src={fleche} alt="flèche" />
          </button>
          <p>{content}</p>
        </div>
      ) : (
        <div className="Dropdown_closed">
          <button className="Dropdown_button" onClick={() => setIsOpen(true)}>
          {title} 
            <img src={fleche} alt="flèche" />
          </button>
        </div>
      );
}

export default DropdownApropos;