import ValorantPoints from "../../images/Icons/valorant point.svg"

const WeaponSkin = ({object, key}) => (
    <div className="weapon-skin">
        <div className="flex mt weapon-skin-txt">
            <p className="weapon-skin-name">{object.name}</p>
            <img
                className="valorant-points"
                src={ValorantPoints}
                alt=""
            />
            <p className="weapon-skin-points">{object.points}</p>
        </div>
        <div>
            <img
                className="weapon-skin-img"
                src={object.image}
                alt={object.name}
            />
        </div>
    </div>
);

export default WeaponSkin