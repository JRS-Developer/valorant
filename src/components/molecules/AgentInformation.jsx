import ListCharacters from "../atoms/ListCharacters";
import React from "react";

class AgentInformation extends React.Component {
    render() {
        return (
            <div className="agent-information">
                <div>
                    <video
                        id="video"
                        className="agent-video"
                        src={ListCharacters[this.props.name].skills[0].video}
                        loop
                        autoPlay
                    ></video>
                </div>

                <div>
                    <h3 className="agent-title">Agents information</h3>
                    <p className="characteristics">
                        Name : <strong>{ListCharacters[this.props.name].name}</strong>
                    </p>
                    <p className="characteristics">
                        Country : <strong>{ListCharacters[this.props.name].country}</strong>
                    </p>
                    <p className="characteristics">
                        Signature Ability : <strong>{ListCharacters[this.props.name].signature}</strong>
                    </p>
                    <p className="characteristics">
                        Abilities :{" "}
                        <strong>{ListCharacters[this.props.name].abilities}</strong>
                    </p>
                    <p className="characteristics">
                        Ultimate : <strong>{ListCharacters[this.props.name].ultimate}</strong>
                    </p>
                </div>
            </div>
        );
    }
}

export default AgentInformation;
