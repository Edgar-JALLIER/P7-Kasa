import { Link } from 'react-router-dom'
import "../../styles/Error.scss"
function Error() {
    return (
        <div className='Error_div'>
            <h1 className='Error_div_title'>404</h1>
            <p className='Error_div_message'>Oups! La page que vous demandez n'existe pas.</p>
            <nav className='Error_div_link'>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </nav>
        </div>
    )
}
 
export default Error