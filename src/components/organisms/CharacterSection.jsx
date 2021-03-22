import { Component } from "react";
import ListCharacters from "../atoms/ListCharacters";
import AgentSkills from "../molecules/AgentSkills";
import AgentInformation from "../molecules/AgentInformation";
// import script from "../../scripts/scripts"

class CharacterSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }

    // componentDidMount() {
    //     script()
    // }

    render() {
        return (
            <section className="personaje">
                <div className="info">
                    <div className="adornos">1</div>
                    <h2 className="info-title">Lore and Storyline</h2>
                    <p className="info-text">
                        {ListCharacters[0].info}
                        <br />
                        <br />
                        {ListCharacters[0].restInfo}
                    </p>

                    <AgentInformation />

                    <AgentSkills />
                </div>
                <div className="foto">
                    <img
                        className="foto-jett-text"
                        src={ListCharacters[0].imgText}
                        alt={ListCharacters[0].name}
                    />
                    <img
                        draggable="false"
                        className="foto-jett"
                        src={ListCharacters[0].image}
                        alt={ListCharacters[0].name}
                    />
                </div>
            </section>
        );
    }
}

export default CharacterSection;
