import "../scss/home.scss";
import { Link } from "react-router-dom";


function Home (){

    return (
        <div className="container-home">
            <div className="links-home">
                <h3 className="h3-home">Casas</h3>
                <Link  to="/house">
                    <img className="home-img" src="../../public/assets/Juego-de-Tronos.jpg" alt=""/>
                </Link>
            </div>
            <div className="links-home">
                <h3 className="h3-home">Personajes</h3>
                <Link to="/character">
                <img className="home-img"src="../../public/assets/personajes.jpeg" alt=""/>
                </Link>
            </div>
             
        </div>
    )
}

export default Home;

