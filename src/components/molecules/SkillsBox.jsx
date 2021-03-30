import ListCharacters from "../atoms/ListCharacters";
const SkillsBox = ({ index, character }) => (
    <div
        className="skills-box"
        id={character.skillsBoxId}
        onClick={function ChangeColor() {
            
            // Variables y constantes para conseguir los elementos por IDS.
            const Container = document.getElementById(
                character.agentContainerId
            );
            let Skills = [];
            const SkillsBoxContainer = document.getElementById(
                character.skillsBoxId
            );
            const ImgText = document.getElementById(character.imgTextId);

            // Añade a la variable skills todos los skills del personaje.
            ListCharacters[index].skills.forEach((e) => {
                Skills.push(e.skillImageId);
            });

            // Despues cambiar el color de las skills y demas cosas.
            Skills.forEach((change) => {
                document.getElementById(change).style.filter = "brightness(0%)";
            });

            SkillsBoxContainer.style.backgroundColor = "white";
            SkillsBoxContainer.style.border = "1px solid black";

            ImgText.style.filter = "brightness(0%)";

            Container.style.backgroundColor = "white";
            Container.style.border = "1px solid black";
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
