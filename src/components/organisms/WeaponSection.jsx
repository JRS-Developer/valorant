import Weapons from "../molecules/Weapons"


const WeaponSection = (props) => (
    <section className="armas-section">
        <div className="armas-container">
            <Weapons name={props.name}/>
        </div>
    </section>
);

export default WeaponSection