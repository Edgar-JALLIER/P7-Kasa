import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Logement from "../pages/Logement";
import TestChose from "../pages/A-Propos";
import Header from "./Header/index";
import Footer from "./Footer/index";
import Error from "../pages/Error";
import Datas from "../datas/datas.json";

function Router () {
    return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Logement" element={<Logement />} />
      <Route path="/A-Propos" element={<TestChose />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    );
}

export default Router;