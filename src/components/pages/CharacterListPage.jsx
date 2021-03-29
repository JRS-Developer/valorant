import Agents from "../../images/Characters/AGENTS.svg";
import ListCharacters from "../atoms/ListCharacters";

const CharacterListPage = () => (
    <main className="main">
        <section className="listcharacter-section">
            <div className="agents-foto">
                <img src={Agents} alt="Agents" />
            </div>
            <div className="agents-grid">
                <div className="agent-container">
                    <div className="agent-image-container">
                        <img
                            draggable="false"
                            src={ListCharacters[0].agentImage}
                            alt=""
                            className="agent-image"
                        />
                    </div>
                    <div className="agent-extras">
                        <div className="rotate-90deg absolute">
                            <span>{ListCharacters[0].country}</span>
                        </div>

                        <img
                            className="name-img"
                            src={ListCharacters[0].imgText}
                            alt=""
                        />
                    </div>

                    <div className="skills-box">
                        <img
                            className="skills-white"
                            src={ListCharacters[0].skills[0].skillImageLink}
                            alt=""
                        />
                        <img
                            className="skills-white"
                            src={ListCharacters[0].skills[1].skillImageLink}
                            alt=""
                        />
                        <img
                            className="skills-white"
                            src={ListCharacters[0].skills[2].skillImageLink}
                            alt=""
                        />
                        <img
                            className="skills-white"
                            src={ListCharacters[0].skills[3].skillImageLink}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    </main>
);
export default CharacterListPage;
