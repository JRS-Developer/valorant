import ActionButton from "../atoms/ActionButton";
import WeaponSet from "../../images/Weapons/HomeSet.svg"
const ActionWeaponSection = () => (
    <section className="action-weapon-section">
        <div className="action-weapon-section--img">
            <img className="weapon--img" src={WeaponSet} alt="" />
        </div>
        <div className="action-character-section--text action-weapon-section--text">
            <h3 className="acs-h3 aws-h3">AWESOME GUNS</h3>
            <p className="acs-p aws-p">
                In Valorant you will find a big set of guns available only for
                YOU. Go ahead and test every weapon, maybe you only want to kill
                your rivals with a KNIFE!
            </p>
            <ActionButton color="white" text="VIEW ALL GUNS" />
        </div>
    </section>
);

export default ActionWeaponSection