import ListCharacters from "../components/atoms/ListCharacters";

const DOMChangeColor = (Object) => {
    let id = document.getElementById(Object);

    const video = document.getElementById("video");

    if (video.getAttribute("src") === ListCharacters[0].skills[0].video) {
        id.style.filter = "brightness(500%)";
    }
};
export default DOMChangeColor;
