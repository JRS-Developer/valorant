import AgentsImage from "../atoms/AgentsImage";
import AgentsGrid from "../organisms/AgentsGrid";
import SkillIcon from "../molecules/SkillIcon"
import SkillDescription from "../molecules/SkillDescription"

const CharacterListPage = () => (
    <main className="main">
        <section className="listcharacter-section">
            <AgentsImage />
            <AgentsGrid />
        </section>
        <section className="skills-section">
            <div className="skill-description-container armas">
                <SkillDescription />
                <SkillIcon />
            </div>
        </section>
    </main>
);
export default CharacterListPage;
