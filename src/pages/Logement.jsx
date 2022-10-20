import "../styles/Carrousel.scss"
import "../styles/Logement.scss"
import Carrousel from "../components/Carrousel/index.jsx";
import {appartementList} from "../datas/datas"
import {useParams} from "react-router-dom"
import Rating from "../components/Rating/index"

function Logement() {

  const params = useParams()
  const id = params.id
  const indexLogement = appartementList.find(element => element.id === id)
  const indexLogements = appartementList.filter(element => element.id === id)

    return <section className="Page_logement">
      <Carrousel />
      <div className="Informations-Logement">
      <div className="Title-Location-Tags">
      <h1>{indexLogement.title}</h1>
      <h3>{indexLogement.location}</h3>

      <div className="Div_Tags">
      {indexLogement.tags.map ((tag, index) => {
      return (
        <div className="Div_Tags--tag" key={index+id}>
          {tag}
        </div>
      )})} 
      </div>
      </div>

      <div className="Host-Rating">
        <div className="Host">
          <p>{indexLogement.host.name}</p>
          <img src={indexLogement.host.picture} alt="Propriétaire" />
        </div>
        
        {indexLogements.map(({index, rating}) => {
          return (
            <div key={index+id} className="Rating">
           <Rating rateValue={Number(rating)}/>  
           </div>         
               )})}      
          </div>      
        </div>
        
    </section>
  }
  
  export default Logement;
  