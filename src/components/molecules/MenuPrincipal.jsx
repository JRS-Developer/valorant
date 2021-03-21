import MenuItem from "../atoms/MenuItem";
import User from "../atoms/User";
import Logo from "../atoms/Logo";
import Separador from "../../images/separador.svg"
import { BrowserRouter as Router } from "react-router-dom";


const MenuPrincipal = () => (
    <Router>
    <nav className="nav">
        <ul className="menu">
            <a href="https://www.riotgames.com/" target="_blank" rel='noreferrer'>
                <Logo link="RiotGames" name="Riot Games" />
            </a>
                <img
                    draggable="false"
                    src={Separador}
                    alt=""
                />
            <a href="https://playvalorant.com/" target="_blank" rel='noreferrer'>
                <Logo link="Valorant" name="Valorant" />
            </a>
            <MenuItem name="GAME" to="Game" />
            <MenuItem name="CHAMPIONS" to="Champions" />
            <MenuItem name="NEWS" to="News" />
            <MenuItem name="PATCH NOTES" to="Patch-Notes" />
            <MenuItem name="DISCOVER" to="Discover" />
            <MenuItem name="ESPORTS" to="Esports" />
            <MenuItem name="UNIVERSE" to="Universe" />
            <MenuItem name="SHOP" to="Shop" />
            <MenuItem name="SUPPORT" to="Support" />
        </ul>
        <ul className="user">
            <User />
        </ul>
    </nav>
    </Router>
);

export default MenuPrincipal;
