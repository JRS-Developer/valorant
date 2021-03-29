import AgentImageContainer from "../molecules/AgentImageContainer"
import AgentExtras from "../molecules/AgentExtras"
import SkillsBox from "../molecules/SkillsBox"
const AgentsGrid = () => (
    <div className="agents-grid">
        <div className="agent-container">
            <AgentImageContainer />
            <AgentExtras />
            <SkillsBox />
        </div>
    </div>
);

export default AgentsGrid;
