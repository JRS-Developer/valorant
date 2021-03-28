import WeaponSkin from "../atoms/WeaponSkin";
import ListWeapons from "../atoms/ListWeapons";

const WeaponSkinsContainer = ({first, second, xClass}) => (
    <div className={`weapon-skins-container ${xClass}`}>
        {ListWeapons[first].weapons[
            second
        ].skins.map((e) => {
            return <WeaponSkin object={e} key={e.name} />;
        })}
    </div>
);
export default WeaponSkinsContainer;
