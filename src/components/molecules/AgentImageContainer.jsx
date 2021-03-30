import ListCharacters from "../atoms/ListCharacters";
import {Link} from "react-router-dom"

const AgentImageContainer = ({index}) => (
    <div className="agent-image-container">
        <Link to={`/Agents/${ListCharacters[index].name}/`}><img
            draggable="false"
            src={ListCharacters[index].agentImage}
            alt=""
            className="agent-image"
        /></Link>
        
    </div>
);

export default AgentImageContainer