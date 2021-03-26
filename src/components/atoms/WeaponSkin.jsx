import Skin from "../../images/Weapons/Weapons-Skins/Luxe Spectre Level 1.svg"
import ValorantPoints from "../../images/Icons/valorant point.svg"

const WeaponSkin = () => (
    <div className="weapon-skin">
        <div className="flex mt weapon-skin-txt">
            <p className="weapon-skin-name">Luxe Spectre Level 1</p>
            <img
                className="valorant-points"
                src={ValorantPoints}
                alt=""
            />
            <p className="weapon-skin-points">875</p>
        </div>
        <div>
            <img
                className="weapon-skin-img"
                src={Skin}
                alt=""
            />
        </div>
    </div>
);

export default WeaponSkin