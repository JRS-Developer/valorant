import ActionButton from "../atoms/ActionButton";
import ListCharacters from "../atoms/ListCharacters";
import {Link} from "react-router-dom"

const ActionCharacterSection = () => (
    <section className="action-character-section">
        <div className="action-character-section--text">
            <h3 className="acs-h3">UNIQUE AGENTS</h3>
            <p className="acs-p">
                Find a big set of Agents with unique and differents skills,
                where every agent have a unique combat style for every player.
            </p>
            <Link to="/Agents/"><ActionButton color="white" text="VIEW ALL AGENTS" /></Link>
            
        </div>
        <div className="action-character-section--img">
            <img
                className="character--img"
                src={ListCharacters[0].image}
                alt={ListCharacters[0].name}
            />
            <img
                className="character--img"
                src={ListCharacters[3].image}
                alt={ListCharacters[3].name}
            />
            <img
                className="name--img"
                src={ListCharacters[0].imgTextFlipped}
                alt={ListCharacters[0].imgTextId}
            />
            <img
                className="name--img"
                src={ListCharacters[3].imgTextFlipped}
                alt={ListCharacters[3].imgTextId}
            />
        </div>
    </section>
);

export default ActionCharacterSection