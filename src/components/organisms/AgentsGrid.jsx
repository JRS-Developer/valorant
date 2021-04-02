import AgentImageContainer from "../molecules/AgentImageContainer";
import AgentExtras from "../molecules/AgentExtras";
import SkillsBox from "../molecules/SkillsBox";
import ListCharacters from "../atoms/ListCharacters";
import Arrow from "../atoms/Arrow"
import React from "react";
import DOMLoadedChangeColor from "../../scripts/DOMLoadedChangeColor";
// import changeColor from "../../scripts/AgentsChangeColor.jsx"


class AgentsGrid extends React.Component {
    constructor(props) {
        super(props)
        this.changeIndex = this.props.changeIndex
    }
    componentDidMount() {
        DOMLoadedChangeColor(ListCharacters[0], "character")
    }
    render() {
        return (
            <div className="agents-grid">
                {ListCharacters.map((character, index) => {
                    return (
                        <div
                            className="agent-container"
                            id={character.agentContainerId}
                            key={character.name}
                        >
                            <Arrow changeIndex={this.props.changeIndex} index={index} character={character}/>
                            <AgentExtras index={index} />
                            <AgentImageContainer index={index} />
                            <SkillsBox changeIndex={this.props.changeIndex} index={index} character={character} changeColor={this.props.changeColor}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default AgentsGrid;
