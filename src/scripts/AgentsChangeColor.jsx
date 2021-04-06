import ListCharacters from "../components/atoms/ListCharacters";
const changeColor = (character, index, changeIndex) => {
    // Cambiar los skills segun el personaje
    changeIndex(index);
    const skillsSection = document.getElementById('skill-section')

    skillsSection.animate([
        {
            opacity: 0
        },{
            opacity: 100
        }
    ], {
        duration: 500,
    })

    // Variables para la funcion de cambiar color
    const Container = document.getElementById(character.agentContainerId);
    let Skills = [];
    const SkillsBoxContainer = document.getElementById(character.skillsBoxId);
    const ImgText = document.getElementById(character.imgTextId);

    // Añade a la variable skills todos los skills del personaje.
    character.skills.forEach((e) => {
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
    Container.classList.add("agent-container--show");

    // Cambiar el color de los otros personajes

    ListCharacters.forEach((e) => {
        if (e.name !== character.name) {
            const ContainerOthers = document.getElementById(e.agentContainerId);
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
                document.getElementById(change).style.filter =
                    "brightness(500%)";
            });

            SkillsBoxContainerOthers.style.backgroundColor = "var(--color)";
            SkillsBoxContainerOthers.style.border = "1px solid white";

            ImgTextOthers.style.filter = "brightness(100%)";

            ContainerOthers.style.backgroundColor = "var(--color)";
            ContainerOthers.style.border = "1px solid var(--color)";
            ContainerOthers.classList.remove("agent-container--show");
        }
    });
};

export default changeColor;
