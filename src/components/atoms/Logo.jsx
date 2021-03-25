import Valorant from "../../images/Logos/valorant-logo.svg"
import RiotGames from "../../images/Logos/riot-games.svg"

const Logo = (props) => {
    const link = props.link
    const classX = props.Class
    if (link === "Valorant") {
        return <img className={`logo ${classX}`} src={Valorant} alt={props.name} />
    } else if (link === "RiotGames") {
        return <img className="logo" src={RiotGames} alt={props.name} />
    }
    
}

export default Logo;
