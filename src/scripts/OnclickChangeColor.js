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

    // Funcion para cambiar color de las skills

    // Funcion para cambiar el video

    // const changeVideoUpdraft = Updraft.addEventListener('click', () => {
    //     if (video.getAttribute('src') !== "/assets/videos/Jett_Q_v001_web.mp4") {
    //         video.setAttribute('src', '/assets/videos/Jett_Q_v001_web.mp4')
    //         Cloudburst.style.filter = 'brightness(500%)'
    //         Tailwind.style.filter = 'brightness(500%)'
    //         BladeStorm.style.filter = 'brightness(500%)'
    //         Updraft.style.filter = 'brightness(100%)'
    //     }
    // })
    // const changeVideoTailwind = Tailwind.addEventListener('click', () => {
    //     if (video.getAttribute('src') !== "/assets/videos/Jett_E_v001_web.mp4") {
    //         video.setAttribute('src', '/assets/videos/Jett_E_v001_web.mp4')
    //         Cloudburst.style.filter = 'brightness(500%)'
    //         BladeStorm.style.filter = 'brightness(500%)'
    //         Updraft.style.filter = 'brightness(500%)'
    //         Tailwind.style.filter = 'brightness(100%)'
    //     }
    // })
    // const changeVideoBladeStorm = BladeStorm.addEventListener('click', () => {
    //     if (video.getAttribute('src') !== "/assets/videos/Jett_X_v001_web.mp4") {
    //         video.setAttribute('src', '/assets/videos/Jett_X_v001_web.mp4')
    //         Cloudburst.style.filter = 'brightness(500%)'
    //         Tailwind.style.filter = 'brightness(500%)'
    //         Updraft.style.filter = 'brightness(500%)'
    //         BladeStorm.style.filter = 'brightness(100%)'
    //     }
    // })

    // Funcion para cambiar color al poner el raton y sacar el raton.

    // const mouseOverBladeStorm = BladeStormContainer.addEventListener('mouseover', () => {
    //     if (BladeStorm.style.filter === 'brightness(100%)') {
    //         BladeStorm.style.filter = 'brightness(500%)'
    //     }
    // })
    // const mouseOutBladeStorm = BladeStormContainer.addEventListener('mouseout', () => {
    //     if (BladeStorm.style.filter === 'brightness(500%)' && video.getAttribute('src') == "/assets/videos/Jett_X_v001_web.mp4") {
    //         BladeStorm.style.filter = 'brightness(100%)'
    //     }
    // })

    // const mouseOverCloudburst = CloudburstContainer.addEventListener('mouseover', () => {
    //     if (Cloudburst.style.filter === 'brightness(100%)') {
    //         Cloudburst.style.filter = 'brightness(500%)'
    //     }
    // })
    // const mouseOutCloudburst = CloudburstContainer.addEventListener('mouseout', () => {
    //     if (Cloudburst.style.filter === 'brightness(500%)' && video.getAttribute('src') == "/assets/videos/Jett_C_v001_web.mp4") {
    //         Cloudburst.style.filter = 'brightness(100%)'
    //     }
    // })

    // const mouseOverTailwind = TailwindContainer.addEventListener('mouseover', () => {
    //     if (Tailwind.style.filter === 'brightness(100%)') {
    //         Tailwind.style.filter = 'brightness(500%)'
    //     }
    // })
    // const mouseOutTailwind = TailwindContainer.addEventListener('mouseout', () => {
    //     if (Tailwind.style.filter === 'brightness(500%)' && video.getAttribute('src') == "/assets/videos/Jett_E_v001_web.mp4") {
    //         Tailwind.style.filter = 'brightness(100%)'
    //     }
    // })

    // const mouseOverUpdraft = UpdraftContainer.addEventListener('mouseover', () => {
    //     if (Updraft.style.filter === 'brightness(100%)') {
    //         Updraft.style.filter = 'brightness(500%)'
    //     }
    // })
    // const mouseOutUpdraft = UpdraftContainer.addEventListener('mouseout', () => {
    //     if (Updraft.style.filter === 'brightness(500%)' && video.getAttribute('src') == "/assets/videos/Jett_Q_v001_web.mp4") {
    //         Updraft.style.filter = 'brightness(100%)'
    //     }
    // })
};

// Funcion para abrir y cerrar sidenav

export default ChangeColor;
