import MenuItem from "../atoms/MenuItem";
import User from "../atoms/User";
import Logo from "../atoms/Logo";
import Separador from "../../images/separador.svg"


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
            <MenuItem name="GAME" to="/Agents/Jett" exact={true}/>
            <MenuItem name="CHAMPIONS" to="/Agents/Sage" />
            <MenuItem name="NEWS" to="/News" />
            <MenuItem name="PATCH NOTES" to="/Patch-Notes" />
            <MenuItem name="DISCOVER" to="/Discover" />
            <MenuItem name="ESPORTS" to="/Esports" />
            <MenuItem name="UNIVERSE" to="/Universe" />
            <MenuItem name="SHOP" to="/Shop" />
            <MenuItem name="SUPPORT" to="/Support" />
        </ul>
        <ul className="user">
            <User />
        </ul>
    </nav>
);

export default MenuPrincipal;
