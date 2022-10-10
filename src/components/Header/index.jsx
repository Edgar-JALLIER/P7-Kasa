import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <div>
            
            <nav>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/A-Propos">A Propos</Link></li>
            </nav>
        </div>
    )
}

export default Header