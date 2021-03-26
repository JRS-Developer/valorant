import ListWeapons from "../atoms/ListWeapons";
import DarkCoins from "../../images/Icons/coins-dark.svg"
import Valorant from "../atoms/Logo"

const InfoWeaponTop = (props) => (
    <div className="info-weapon-top">
        <img
            className="weapon-image"
            src={ListWeapons[props.first].weapons[
                props.second
            ].image}
            alt={ListWeapons[props.first].weapons[
                props.second
            ].imgLink}
        />
        <div className="weapon-coins">
            <img
                className="weapon-dark-icon"
                src={DarkCoins}
                alt=""
            />
            <p className="black armas-text-coin">{ListWeapons[props.first].weapons[
                props.second
            ].points}</p>
        </div>
        <div className="weapon-tag">
            <Valorant link="Valorant" className="weapon-tag-img"/>
        </div>
    </div>
);

export default InfoWeaponTop;
