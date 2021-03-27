import WeaponSkin from "../atoms/WeaponSkin";
import ListWeapons from "../atoms/ListWeapons";

const WeaponSkinsContainer = (props) => (
    <div className="weapon-skins-container">
        {ListWeapons[props.first].weapons[
            props.second
        ].skins.map((e) => {
            return <WeaponSkin object={e} key={e.name} />;
        })}
    </div>
);
export default WeaponSkinsContainer;
