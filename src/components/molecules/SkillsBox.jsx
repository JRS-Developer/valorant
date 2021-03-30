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

            // Cambiar el color de los otros personajes

            ListCharacters.forEach((e,indexOther) => {
                if (e.name !== character.name) {
                    const ContainerOthers = document.getElementById(
                        e.agentContainerId
                    );
                    let SkillsOthers = [];
                    const SkillsBoxContainerOthers = document.getElementById(
                        e.skillsBoxId
                    );
                    const ImgTextOthers = document.getElementById(e.imgTextId);
        
                    // Añade a la variable skills todos los skills del personaje.
                    e.skills.forEach((skill) => {
                        SkillsOthers.push(skill.skillImageId);
                    });
        
                    // Despues cambiar el color de las skills y demas cosas.
                    SkillsOthers.forEach((change) => {
                        document.getElementById(change).style.filter = "brightness(500%)";
                    });
        
                    SkillsBoxContainerOthers.style.backgroundColor = "var(--color)";
                    SkillsBoxContainerOthers.style.border = "1px solid white";
        
                    ImgTextOthers.style.filter = "brightness(100%)";
        
                    ContainerOthers.style.backgroundColor = "var(--color)";
                    ContainerOthers.style.border = "1px solid var(--color)";
                }
            })
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
