const DOMChangeColor = (Object, Use) => {
    if (Use === "video") {
        let id = document.getElementById(Object.skillImageId);

        const video = document.getElementById("video");

        if (video.getAttribute("src") === Object.video) {
            id.style.filter = "brightness(500%)";
        }
    } else if (Use === "character") {
        const Container = document.getElementById(Object.agentContainerId);
        let Skills = [];
        const SkillsBoxContainer = document.getElementById(Object.skillsBoxId);
        const ImgText = document.getElementById(Object.imgTextId);

        // Añade a la variable skills todos los skills del personaje.
        Object.skills.forEach((e) => {
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
        Container.classList.add("agent-container--show")
    }
};
export default DOMChangeColor;
