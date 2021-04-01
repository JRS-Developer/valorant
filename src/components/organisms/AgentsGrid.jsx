import AgentImageContainer from "../molecules/AgentImageContainer";
import AgentExtras from "../molecules/AgentExtras";
import SkillsBox from "../molecules/SkillsBox";
import ListCharacters from "../atoms/ListCharacters";
import React from "react";
import DOMLoadedChangeColor from "../../scripts/DOMLoadedChangeColor";

class AgentsGrid extends React.Component {
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
                            <AgentExtras index={index} />
                            <AgentImageContainer index={index} />
                            <SkillsBox changeIndex={this.props.changeIndex} index={index} character={character} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default AgentsGrid;
