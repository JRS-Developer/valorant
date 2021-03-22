import ListCharacters from "../atoms/ListCharacters";

const AgentInformation = () => (
    <div className="agent-information">
                        <div>
                            <video
                                id="video"
                                className="agent-video"
                                src={ListCharacters[0].skills[0].video}
                                loop
                                autoPlay
                            ></video>
                        </div>

                        <div>
                            <h3 className="agent-title">Agents information</h3>
                            <p className="characteristics">
                                Name : <strong>{ListCharacters[0].name}</strong>
                            </p>
                            <p className="characteristics">
                                Country :{" "}
                                <strong>{ListCharacters[0].country}</strong>
                            </p>
                            <p className="characteristics">
                                Signature Ability :{" "}
                                <strong>{ListCharacters[0].signature}</strong>
                            </p>
                            <p className="characteristics">
                                Abilities :{" "}
                                <strong>{ListCharacters[0].abilities}</strong>
                            </p>
                            <p className="characteristics">
                                Ultimate :{" "}
                                <strong>{ListCharacters[0].ultimate}</strong>
                            </p>
                        </div>
                    </div>
)

export default AgentInformation