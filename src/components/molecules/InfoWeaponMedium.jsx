import ListWeapons from "../atoms/ListWeapons";

const InfoWeaponMedium = ({ first, second }) => (
    <div className="info-weapon-medium">
        <p className="info-weapon-medium-txt">
            {ListWeapons[first].weapons[second].infoFirst}
        </p>
        <br/>
        <p className="info-weapon-medium-txt">
            {ListWeapons[first].weapons[second].infoSecond}
        </p>
    </div>
);

export default InfoWeaponMedium;
