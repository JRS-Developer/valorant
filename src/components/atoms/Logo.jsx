import Valorant from "../../images/Logos/valorant-logo.svg"
import RiotGames from "../../images/Logos/riot-games.svg"

const Logo = ({link, classX, name}) => {
    if (link === "Valorant") {
        return <img className={`logo ${classX}`} src={Valorant} alt={name} />
    } else if (link === "RiotGames") {
        return <img className="logo" src={RiotGames} alt={name} />
    }
}

export default Logo;
