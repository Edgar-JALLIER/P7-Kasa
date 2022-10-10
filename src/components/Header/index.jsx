import { Link } from 'react-router-dom'
import "../../styles/Header.scss"
import Logo from "../../assets/LOGO-Header.png"

function Header() {
    return (
        <header className='Header_div'>
            <img className="Header_div_logo" src={Logo} alt="Logo" />
            <nav className='Header_div_nav'>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/A-Propos">A Propos</Link></li>
            </nav>
        </header>
    )
}

export default Header