import ListCharacters from "../atoms/ListCharacters";

const AgentExtras = () => (
    <div className="agent-extras">
        <div className="rotate-90deg absolute">
            <span>{ListCharacters[0].country}</span>
        </div>

        <img className="name-img" src={ListCharacters[0].imgText} alt="" />
    </div>
);

export default AgentExtras