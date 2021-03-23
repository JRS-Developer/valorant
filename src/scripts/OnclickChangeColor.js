const ChangeColor = (Object, VideoLink, List) => {
    let video = document.getElementById("video");
    let id = document.getElementById(Object);
    let List0 = document.getElementById(List[0].skillImageId);
    let List1 = document.getElementById(List[1].skillImageId);
    let List2 = document.getElementById(List[2].skillImageId);
    let List3 = document.getElementById(List[3].skillImageId);
    // console.log(id.getAttribute("id"));
    if (video.getAttribute("src") === VideoLink) {
        id.style.filter = "brightness(500%)";
        switch (id.getAttribute("id")) {
            case List[0].skillImageId:
                List1.style.filter = "brightness(100%)";
                List2.style.filter = "brightness(100%)";
                List3.style.filter = "brightness(100%)";
                break;
            case List[1].skillImageId:
                List0.style.filter = "brightness(100%)";
                List2.style.filter = "brightness(100%)";
                List3.style.filter = "brightness(100%)";
                break
            case List[2].skillImageId:
                List0.style.filter = "brightness(100%)";
                List1.style.filter = "brightness(100%)";
                List3.style.filter = "brightness(100%)";
                break
            case List[3].skillImageId:
                List0.style.filter = "brightness(100%)";
                List2.style.filter = "brightness(100%)";
                List1.style.filter = "brightness(100%)";
                break
            default:
                break;
        }
    }
}
export default ChangeColor;
