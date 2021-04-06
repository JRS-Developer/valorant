import AgentsImage from "../atoms/AgentsImage";
import AgentsGrid from "../organisms/AgentsGrid";
import SkillIcon from "../molecules/SkillIcon";
import SkillDescription from "../molecules/SkillDescription";
import ListCharacters from "../atoms/ListCharacters";
import React from "react";
import changeColor from "../../scripts/AgentsChangeColor.jsx"
import Footer from "../organisms/Footer";

class CharacterListPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }

    changeIndex = (index) => {
        if (index !== this.state.index ) {
            this.setState({
                index: index
            })
        } else if (index === this.state.index) {
            let skillSection = document.getElementById('skill-section')
            Promise.all(
                skillSection.getAnimations({ subtree: true })
                  .map(animation => animation.finished)
              );
        }
        
    }

    render() {
        return (
            <>
            <main className="main">
                <section className="listcharacter-section">
                    <AgentsImage />
                    <AgentsGrid changeIndex={this.changeIndex} changeColor={changeColor}/>
                </section>
                <section className="skills-section" id="skill-section">
                    {ListCharacters[this.state.index].skills.map((e) => {
                        return (
                            <div className="skill-description-container armas" key={e.title}>
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
            <Footer />
            </>
        );
    }
}

export default CharacterListPage;
