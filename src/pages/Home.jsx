import BannerHome from "../components/Banner/Banner_HomePage";
import Card from "../components/Card/index"
import "../styles/Home.scss"

function Home() {
  return ( 
  <div className="Home_div">
      <BannerHome/>
      <div className="Card_div">
      <Card />
      </div>
  </div>
  )
}

export default Home;
