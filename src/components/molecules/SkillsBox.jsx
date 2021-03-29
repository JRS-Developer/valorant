import ListCharacters from "../atoms/ListCharacters";
const SkillsBox = ({ index }) => (
    <div className="skills-box">
        {ListCharacters[index].skills.map((e) => {
            return (
                <img
                    key={e.skillImageId}
                    className="skills-white"
                    src={e.skillImageLink}
                    alt={e.skillImageId}
                />
            );
        })}
    </div>
);

export default SkillsBox;
