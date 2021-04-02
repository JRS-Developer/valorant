import AgentImageContainer from "../molecules/AgentImageContainer";
import AgentExtras from "../molecules/AgentExtras";
import SkillsBox from "../molecules/SkillsBox";
import ListCharacters from "../atoms/ListCharacters";
import React from "react";
import DOMLoadedChangeColor from "../../scripts/DOMLoadedChangeColor";
import LArrow from "../../images/Icons/L-Arrow.svg"
import RArrow from "../../images/Icons/R-Arrow.svg"


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
                            <img className="arrow absolute l-arrow" id="l-arrow" src={LArrow} alt=""/>
                            <img className="arrow absolute r-arrow" id="r-arrow" src={RArrow} alt=""/>
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
