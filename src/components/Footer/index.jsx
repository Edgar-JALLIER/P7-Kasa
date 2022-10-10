import "../../styles/Footer.scss"
import Logo from "../../assets/LOGO-Footer.png"

function Footer() {
    return (
        <footer className="Footer_div">
            <img className="Footer_div_logo" src={Logo} alt="Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer