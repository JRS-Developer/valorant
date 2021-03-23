
const DOMChangeColor = (Object) => {
    let id = document.getElementById(Object.skillImageId);

    const video = document.getElementById("video");

    if (video.getAttribute("src") === Object.video) {
        id.style.filter = "brightness(500%)";
    }
};
export default DOMChangeColor;
