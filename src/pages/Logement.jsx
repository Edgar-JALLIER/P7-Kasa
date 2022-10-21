import "../styles/Carrousel.scss"
import "../styles/Logement.scss"
import Carrousel from "../components/Carrousel/index.jsx";
import {appartementList} from "../datas/datas"
import {useParams} from "react-router-dom"
import Rating from "../components/Rating/index"
import DropdownApropos from "../components/Dropdown/A-Propos_Dropdown";

function Logement() {

  const params = useParams()
  const id = params.id
  const indexLogement = appartementList.find(element => element.id === id)
  const indexLogements = appartementList.filter(element => element.id === id)

    return <section className="Page_logement">
      <Carrousel />
      <div className="Page_logement_informations">
      {/*  Titre Logement */}
      <div className="Informations-Logement">
      <div className="Title-Location-Tags">
      <h1>{indexLogement.title}</h1>
      <h3>{indexLogement.location}</h3>

       {/*  Tags */}
      <div className="Div_Tags">
      {indexLogement.tags.map ((tag, index) => {
      return (
        <div className="Div_Tags--tag" key={index+id}>
          {tag}
        </div>
      )})} 
      </div>
      </div>

       {/*  Host */}
      <div className="Host-Rating">
        <div className="Host">
          <p>{indexLogement.host.name}</p>
          <img src={indexLogement.host.picture} alt="Propriétaire" />
        </div>

         {/*  Rating */}
        {indexLogements.map(({index, rating}) => {
          return (
            <div key={index+id} className="Rating">
           <Rating rateValue={Number(rating)}/>  
           </div>         
               )})}      
          </div>      
        </div>

         {/*  Description + Equipements */}
        <div className="Dropdown_logement">
          <DropdownApropos className="Dropdown_logement_description" title="Description" content={indexLogement.description}/>
          <DropdownApropos className="Dropdown_logement_equipement"title="Équipements" content={indexLogement.equipments.map ((equipment, index) => {
      return (
        <li className="Dropdown_logement_equipement_li" key={index+id}>
          {equipment}
        </li>
      )})} />
      </div>
      </div>
    </section>
  }
  
  export default Logement;
  