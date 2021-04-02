import ListCharacters from "../atoms/ListCharacters";
const SkillsBox = ({ index, character, changeIndex, changeColor }) => (
    <div
        className="skills-box"
        id={character.skillsBoxId}
        onClick={function change() {
            changeColor(character,index,changeIndex)
        }}
    >
        {ListCharacters[index].skills.map((img) => {
            return (
                <img
                    key={img.skillImageId}
                    id={img.skillImageId}
                    className="skills-white"
                    src={img.skillImageLink}
                    alt={img.skillImageId}
                />
            );
        })}
    </div>
);

export default SkillsBox;
