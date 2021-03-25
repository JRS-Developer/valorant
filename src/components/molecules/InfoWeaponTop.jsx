import ListWeapons from "../atoms/ListWeapons";
import DarkCoins from "../../images/Icons/coins-dark.svg"
import Valorant from "../atoms/Logo"

const InfoWeaponTop = (props) => (
    <div class="info-weapon-top">
        <img
            class="weapon-image"
            src={ListWeapons[props.first].weapons[
                props.second
            ].image}
            alt={ListWeapons[props.first].weapons[
                props.second
            ].imgLink}
        />
        <div class="weapon-coins">
            <img
                class="weapon-dark-icon"
                src={DarkCoins}
                alt=""
            />
            <p class="black armas-text-coin">{ListWeapons[props.first].weapons[
                props.second
            ].points}</p>
        </div>
        <div class="weapon-tag">
            <Valorant link="Valorant" Class="weapon-tag-img"/>
        </div>
    </div>
);

export default InfoWeaponTop;
