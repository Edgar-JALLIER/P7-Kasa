import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Logement from "../pages/Logement";
import Apropos from "../pages/A-Propos";
import Header from "./Header/index";
import Footer from "./Footer/index";
import Error from "../pages/Error";

function Router () {
const rootUrl = "/P7-Kasa"

    return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path= {rootUrl+"/" } element={<Home />} />
      <Route path={rootUrl+"/Logement/:id" } element={<Logement />} />
      <Route path={rootUrl+"/A-Propos" }  element={<Apropos />} />
      <Route path={rootUrl+"/*" }  element={<Error />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
    );
}

export default Router;