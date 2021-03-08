// Funcion para cambiar el video

var video = document.getElementById('video');


var Cloudburst = document.getElementById('cloudburst')
var Updraft = document.getElementById('updraft')
var Tailwind = document.getElementById('tailwind')
var BladeStorm = document.getElementById('blade-storm')

const changeVideoCloudburst = Cloudburst.addEventListener('click', () => {
    if (video.getAttribute('src') !== "/assets/videos/Jett_C_v001_web.mp4"){
        video.setAttribute('src','/assets/videos/Jett_C_v001_web.mp4')
    }
    
})

const changeVideoUpdraft = Updraft.addEventListener('click', () => {
    if (video.getAttribute('src') !== "/assets/videos/Jett_Q_v001_web.mp4"){
        video.setAttribute('src','/assets/videos/Jett_Q_v001_web.mp4')
    }
})
const changeVideoTailwind = Tailwind.addEventListener('click', () => {
    if (video.getAttribute('src') !== "/assets/videos/Jett_E_v001_web.mp4"){
        video.setAttribute('src','/assets/videos/Jett_E_v001_web.mp4')
    }
})
const changeVideoBladeStorm = BladeStorm.addEventListener('click', () => {
    if (video.getAttribute('src') !== "/assets/videos/Jett_X_v001_web.mp4"){
        video.setAttribute('src','/assets/videos/Jett_X_v001_web.mp4')
    }
})


// Funcion para abrir y cerrar sidenav 

function openSidenav(){
    const grow = document.getElementById('sidenav');
    grow.style.width = '40%';
    document.getElementById('fade').style.width = "100%";
}

function closeSidenav(){
    document.getElementById('sidenav').style.width = '0%';
    document.getElementById('fade').style.width = "0";
}