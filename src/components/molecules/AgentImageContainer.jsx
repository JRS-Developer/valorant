import ListCharacters from "../atoms/ListCharacters";

const AgentImageContainer = () => (
    <div className="agent-image-container">
        <img
            draggable="false"
            src={ListCharacters[0].agentImage}
            alt=""
            className="agent-image"
        />
    </div>
);

export default AgentImageContainer