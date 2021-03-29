import ListCharacters from "../atoms/ListCharacters";

const AgentExtras = ({index}) => (
    <div className="agent-extras">
        <div className="rotate-90deg absolute">
            <span>{ListCharacters[index].country}</span>
        </div>

        <img className="name-img" src={ListCharacters[index].imgText} alt="" />
    </div>
);

export default AgentExtras