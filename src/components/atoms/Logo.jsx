import Valorant from "../../images/Logos/valorant-logo.svg"
import RiotGames from "../../images/Logos/riot-games.svg"

const Logo = (props) => {
    const link = props.link
    if (link === "Valorant") {
        return <img className="logo" src={Valorant} alt={props.name} />
    } else if (link === "RiotGames") {
        return <img className="logo" src={RiotGames} alt={props.name} />
    }
    
}

export default Logo;
