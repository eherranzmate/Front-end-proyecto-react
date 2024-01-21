import { Link } from "react-router-dom";
import "../scss/menu.scss"

function Menu (){

    return (
        <header>
            <nav>
                <div className="nav-logo">
                    <Link to="/">
                        <img className="nav-img" src="../../public/assets/gameOfThrones.png" alt=""/>
                    </Link>
                </div>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Registro</Link></li>
                    <li><Link to="/myprofile">Perfil</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu;