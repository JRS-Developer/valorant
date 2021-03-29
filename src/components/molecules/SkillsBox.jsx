import ListCharacters from "../atoms/ListCharacters";
const SkillsBox = () => (
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
);

export default SkillsBox;
