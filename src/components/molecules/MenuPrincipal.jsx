import MenuItem from "../atoms/MenuItem";
import User from "../atoms/User";
import Logo from "../atoms/Logo";
import Separador from "../../images/Icons/separador.svg"


const MenuPrincipal = () => (
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
            <MenuItem name="GAME" to="/Game"/>
            <MenuItem name="AGENTS" to="/Agents/" />
            <MenuItem name="WEAPONS" to="/Weapons/" />
            <MenuItem name="PATCH NOTES" to="/Patch-Notes" />
            <MenuItem name="DISCOVER" to="/Discover" />
        </ul>
        <ul className="user">
            <User />
        </ul>
    </nav>
);

export default MenuPrincipal;
