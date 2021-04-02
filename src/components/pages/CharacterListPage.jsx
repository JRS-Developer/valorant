import AgentsImage from "../atoms/AgentsImage";
import AgentsGrid from "../organisms/AgentsGrid";
import SkillIcon from "../molecules/SkillIcon";
import SkillDescription from "../molecules/SkillDescription";
import ListCharacters from "../atoms/ListCharacters";
import React from "react";

class CharacterListPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }

    changeIndex = (index) => {
        this.setState({
            index: index
        })
    }
    render() {
        return (
            <main className="main">
                <section className="listcharacter-section">
                    <AgentsImage />
                    <AgentsGrid changeIndex={this.changeIndex}/>
                </section>
                <section className="skills-section" id="skill-section">
                    {ListCharacters[this.state.index].skills.map((e) => {
                        return (
                            <div className="skill-description-container armas">
                                <SkillDescription
                                    category={e.category}
                                    skill={e.title}
                                    descrip={e.text}
                                />
                                <SkillIcon
                                    src={e.skillImageLink}
                                    alt={e.title}
                                />
                            </div>
                        );
                    })}
                </section>
            </main>
        );
    }
}

export default CharacterListPage;
