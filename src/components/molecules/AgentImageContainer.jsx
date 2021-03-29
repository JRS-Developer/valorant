import ListCharacters from "../atoms/ListCharacters";

const AgentImageContainer = ({index}) => (
    <div className="agent-image-container">
        <img
            draggable="false"
            src={ListCharacters[index].agentImage}
            alt=""
            className="agent-image"
        />
    </div>
);

export default AgentImageContainer