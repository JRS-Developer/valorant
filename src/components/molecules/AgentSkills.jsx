import ListCharacters from "../atoms/ListCharacters";
import React from "react";
import ChangeColor from "../../scripts/OnclickChangeColor";
import MouseEnter from "../../scripts/MouseEnter";

class AgentSkills extends React.Component {
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
                                onClick={function ChangeVideo() {
                                    const video = document.getElementById(
                                        "video"
                                    );
                                    const videoLink = skill.video;
                                    if (
                                        video.getAttribute("src") !== videoLink
                                    ) {
                                        video.setAttribute("src", videoLink);
                                        ChangeColor(skill.skillImageId, skill.video,ListCharacters[0].skills);
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
