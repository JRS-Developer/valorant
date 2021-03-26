import Damage from "../atoms/Damage"
import ListWeapons from "../atoms/ListWeapons";

const DamageSection = (props) => (
    <section className="armas-section damage-section">
            <div className="armas-container">
                {ListWeapons[props.first].weapons[props.second].damage.map(e => {
                    return <Damage damage={e} key={e.zone}/>
                })}
            </div>
        </section>
)

export default DamageSection