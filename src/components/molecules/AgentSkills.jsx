import ListCharacters from "../atoms/ListCharacters";
import React from "react";
import Script from "../../scripts/scripts"

class AgentSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }
    
    

    render() {
        return (
            <div className="agent-skills">
                {ListCharacters[0].skills.map((skill, index) => (
                    <React.Fragment key={index}>
                        <div id={skill.skillContainerId} className="skills">
                            <img
                                    className="skills-icon"
                                    id={skill.skillImageId}
                                    src={skill.skillImageLink}
                                    alt={skill.title}
                                onClick={
                                    function ChangeVideo () {
                                    const video = document.getElementById(
                                        "video"
                                    );
                                    const videoLink = skill.video
                                    if (
                                        video.getAttribute("src") !==
                                        videoLink
                                    ) {
                                        video.setAttribute("src", videoLink);
                                        Script(skill.skillImageId,skill.video)
                                    }
                                }}
                            />
                            <h4 className="skills-title">{skill.title}:</h4>
                            <p className="skills-text">{skill.text}</p>
                        </div>
                        <div className="barra"></div>
                    </React.Fragment>
                ))}
            </div>
        );
    }
}

export default AgentSkills;
