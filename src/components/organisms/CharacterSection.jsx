import { Component } from "react";
import ListCharacters from "../atoms/ListCharacters";
import AgentSkills from "../molecules/AgentSkills";
import AgentInformation from "../molecules/AgentInformation";
// import script from "../../scripts/scripts"
import DOMLoadedChangeColor from "../../scripts/DOMLoadedChangeColor";

class CharacterSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 0,
        };
    }

    componentDidMount() {
        DOMLoadedChangeColor(ListCharacters[this.state.name].skills[0]);
        ListCharacters.forEach(element => {
            if (element.name === this.props.name) {
                this.setState({name: element.key})
            }
        })
    }

    render() {
        return (
            <section className="personaje">
                <div className="info">
                    <div className="adornos">1</div>
                    <h2 className="info-title">Lore and Storyline</h2>
                    <p className="info-text">
                        {ListCharacters[this.state.name].info}
                        <br />
                        <br />
                        {ListCharacters[this.state.name].restInfo}
                    </p>

                    <AgentInformation name={this.state.name} />

                    <AgentSkills name={this.state.name} />
                </div>
                <div className="foto">
                    <img
                        className="foto-jett-text"
                        src={ListCharacters[this.state.name].imgText}
                        alt={ListCharacters[this.state.name].name}
                    />
                    <img
                        draggable="false"
                        className="foto-jett"
                        src={ListCharacters[this.state.name].image}
                        alt={ListCharacters[this.state.name].name}
                    />
                </div>
            </section>
        );
    }
}

export default CharacterSection;
