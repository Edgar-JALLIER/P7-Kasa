import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Logement from "../pages/Logement";
import Apropos from "../pages/A-Propos";
import Header from "./Header/index";
import Footer from "./Footer/index";
import Error from "../pages/Error";

function Router () {
    return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/P7-Kasa/" element={<Home />} />
      <Route path="/P7-Kasa/Logement/:id" element={<Logement />} />
      <Route path="/P7-Kasa/A-Propos" element={<Apropos />} />
      <Route path="*" element={<Error />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
    );
}

export default Router;