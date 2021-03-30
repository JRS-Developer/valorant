import AgentImageContainer from "../molecules/AgentImageContainer"
import AgentExtras from "../molecules/AgentExtras"
import SkillsBox from "../molecules/SkillsBox"
import ListCharacters from "../atoms/ListCharacters";
const AgentsGrid = () => (
    <div className="agents-grid">
        {ListCharacters.map((e,index) => {
            return (<div className="agent-container" key={e.name}>
                <AgentExtras index={index}/>
                <AgentImageContainer index={index}/>
                <SkillsBox index={index}/>
            </div>
            )
        })}
        
    </div>
);

export default AgentsGrid;
