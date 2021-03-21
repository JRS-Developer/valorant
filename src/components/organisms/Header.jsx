import MenuPrincipal from "../molecules/MenuPrincipal"
import MenuDesplegable from "../molecules/MenuDesplegable";

const Header = () => (
    <header className="header">
        <MenuPrincipal/>
        <MenuDesplegable/>
    </header>
)

export default Header