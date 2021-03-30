import AgentImageContainer from "../molecules/AgentImageContainer"
import AgentExtras from "../molecules/AgentExtras"
import SkillsBox from "../molecules/SkillsBox"
import ListCharacters from "../atoms/ListCharacters";
const AgentsGrid = () => (
    <div className="agents-grid">
        {ListCharacters.map((character,index) => {
            return (<div className="agent-container" id={character.agentContainerId} key={character.name}>
                <AgentExtras index={index}/>
                <AgentImageContainer index={index}/>
                <SkillsBox index={index} character={character}/>
            </div>
            )
        })}
        
    </div>
);

export default AgentsGrid;
