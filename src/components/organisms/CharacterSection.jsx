import { Component } from "react";
import ListCharacters from "../atoms/ListCharacters";
import AgentSkills from "../molecules/AgentSkills";
import AgentInformation from "../molecules/AgentInformation";
// import script from "../../scripts/scripts"
import DOMLoadedChangeColor from "../../scripts/DOMLoadedChangeColor";

class CharacterSection extends Component {
    componentDidMount() {
        DOMLoadedChangeColor(ListCharacters[this.props.name].skills[0]);
    }

    render() {
        return (
            <section className="personaje">
                <div className="info">
                    <div className="adornos">1</div>
                    <h2 className="info-title">Lore and Storyline</h2>
                    <p className="info-text">
                        {ListCharacters[this.props.name].info}
                        <br />
                        <br />
                        {ListCharacters[this.props.name].restInfo}
                    </p>

                    <AgentInformation name={this.props.name} />

                    <AgentSkills name={this.props.name} />
                </div>
                <div className="foto">
                    <img
                        className="foto-jett-text"
                        src={ListCharacters[this.props.name].imgText}
                        alt={ListCharacters[this.props.name].name}
                    />
                    <img
                        draggable="false"
                        className="foto-jett"
                        src={ListCharacters[this.props.name].image}
                        alt={ListCharacters[this.props.name].name}
                    />
                </div>
            </section>
        );
    }
}

export default CharacterSection;
