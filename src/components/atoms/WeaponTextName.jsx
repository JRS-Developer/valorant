import ListWeapons from "../atoms/ListWeapons";

const WeaponTextName = (props) => (
    <div className="info-weapon-chart clip">
        <img
            className="spectre-text"
            src={ListWeapons[props.first].weapons[
                props.second
            ].imgText}
            alt={ListWeapons[props.first].weapons[
                props.second
            ].imgLink}
        />
    </div>
);
export default WeaponTextName