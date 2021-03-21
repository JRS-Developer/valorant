import Logo from "../atoms/Logo"
import { BrowserRouter as Router, Link } from "react-router-dom";

const MenuDesplegable = () => (
    <Router>
        <div className="toggle nav" id="toggle">
            <ul className="menu">
                <Link
                    href="https://playvalorant.com/"
                    rel="noreferrer"
                    target="_blank"
                >
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
    </Router>
);

export default MenuDesplegable;
