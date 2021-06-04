import Logo from "../atoms/Logo"
import { Link } from "react-router-dom"

const MenuDesplegable = () => (
    <div className="toggle nav" id="toggle">
            <ul className="menu">
            <Link to="/Game">
                    <Logo link="Valorant"/>
                </Link>
            </ul>
            <ul
                className="icon-toggle"
                onClick={function openSidenav() {
                    const grow = document.getElementById("sidenav");
                    grow.style.width = "40%";
                    document.getElementById("fade").style.width = "100%";
                }}
            >
                <div className="circle">
                    <div className="hamburguer"></div>
                    <div className="hamburguer"></div>
                    <div className="hamburguer"></div>
                </div>
            </ul>
        </div>
);

export default MenuDesplegable;