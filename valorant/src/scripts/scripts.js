var video = document.getElementById('video');


var Cloudburst = document.getElementById('cloudburst')
var Updraft = document.getElementById('updraft')
var Tailwind = document.getElementById('tailwind')
var BladeStorm = document.getElementById('blade-storm')

var CloudburstContainer = document.getElementById('cloudburst-container')
var UpdraftContainer = document.getElementById('updraft-container')
var TailwindContainer = document.getElementById('tailwind-container')
var BladeStormContainer = document.getElementById('blade-storm-container')

// Funcion para cambiar color de las skills

document.addEventListener('DOMContentLoaded', () => {
    if (video.getAttribute('src') == "/assets/videos/Jett_C_v001_web.mp4") {
        Tailwind.style.filter = 'brightness(500%)'
        BladeStorm.style.filter = 'brightness(500%)'
        Updraft.style.filter = 'brightness(500%)'
        Cloudburst.style.filter = 'brightness(100%)'
    }
})

// Funcion para cambiar el video

const changeVideoCloudburst = Cloudburst.addEventListener('click', () => {
    if (video.getAttribute('src') !== "/assets/videos/Jett_C_v001_web.mp4") {
        video.setAttribute('src', '/assets/videos/Jett_C_v001_web.mp4')
        Tailwind.style.filter = 'brightness(500%)'
        BladeStorm.style.filter = 'brightness(500%)'
        Updraft.style.filter = 'brightness(500%)'
        Cloudburst.style.filter = 'brightness(100%)'
    }

})

const changeVideoUpdraft = Updraft.addEventListener('click', () => {
    if (video.getAttribute('src') !== "/assets/videos/Jett_Q_v001_web.mp4") {
        video.setAttribute('src', '/assets/videos/Jett_Q_v001_web.mp4')
        Cloudburst.style.filter = 'brightness(500%)'
        Tailwind.style.filter = 'brightness(500%)'
        BladeStorm.style.filter = 'brightness(500%)'
        Updraft.style.filter = 'brightness(100%)'
    }
})
const changeVideoTailwind = Tailwind.addEventListener('click', () => {
    if (video.getAttribute('src') !== "/assets/videos/Jett_E_v001_web.mp4") {
        video.setAttribute('src', '/assets/videos/Jett_E_v001_web.mp4')
        Cloudburst.style.filter = 'brightness(500%)'
        BladeStorm.style.filter = 'brightness(500%)'
        Updraft.style.filter = 'brightness(500%)'
        Tailwind.style.filter = 'brightness(100%)'
    }
})
const changeVideoBladeStorm = BladeStorm.addEventListener('click', () => {
    if (video.getAttribute('src') !== "/assets/videos/Jett_X_v001_web.mp4") {
        video.setAttribute('src', '/assets/videos/Jett_X_v001_web.mp4')
        Cloudburst.style.filter = 'brightness(500%)'
        Tailwind.style.filter = 'brightness(500%)'
        Updraft.style.filter = 'brightness(500%)'
        BladeStorm.style.filter = 'brightness(100%)'
    }
})

// Funcion para cambiar color al poner el raton y sacar el raton.

const mouseOverBladeStorm = BladeStormContainer.addEventListener('mouseover', () => {
    if (BladeStorm.style.filter == 'brightness(100%)') {
        BladeStorm.style.filter = 'brightness(500%)'
    }
})
const mouseOutBladeStorm = BladeStormContainer.addEventListener('mouseout', () => {
    if (BladeStorm.style.filter == 'brightness(500%)' && video.getAttribute('src') == "/assets/videos/Jett_X_v001_web.mp4") {
        BladeStorm.style.filter = 'brightness(100%)'
    }
})

const mouseOverCloudburst = CloudburstContainer.addEventListener('mouseover', () => {
    if (Cloudburst.style.filter == 'brightness(100%)') {
        Cloudburst.style.filter = 'brightness(500%)'
    }
})
const mouseOutCloudburst = CloudburstContainer.addEventListener('mouseout', () => {
    if (Cloudburst.style.filter == 'brightness(500%)' && video.getAttribute('src') == "/assets/videos/Jett_C_v001_web.mp4") {
        Cloudburst.style.filter = 'brightness(100%)'
    }
})

const mouseOverTailwind = TailwindContainer.addEventListener('mouseover', () => {
    if (Tailwind.style.filter == 'brightness(100%)') {
        Tailwind.style.filter = 'brightness(500%)'
    }
})
const mouseOutTailwind = TailwindContainer.addEventListener('mouseout', () => {
    if (Tailwind.style.filter == 'brightness(500%)' && video.getAttribute('src') == "/assets/videos/Jett_E_v001_web.mp4") {
        Tailwind.style.filter = 'brightness(100%)'
    }
})

const mouseOverUpdraft = UpdraftContainer.addEventListener('mouseover', () => {
    if (Updraft.style.filter == 'brightness(100%)') {
        Updraft.style.filter = 'brightness(500%)'
    }
})
const mouseOutUpdraft = UpdraftContainer.addEventListener('mouseout', () => {
    if (Updraft.style.filter == 'brightness(500%)' && video.getAttribute('src') == "/assets/videos/Jett_Q_v001_web.mp4") {
        Updraft.style.filter = 'brightness(100%)'
    }
})


// Funcion para abrir y cerrar sidenav 

function openSidenav() {
    const grow = document.getElementById('sidenav');
    grow.style.width = '40%';
    document.getElementById('fade').style.width = "100%";
}

function closeSidenav() {
    document.getElementById('sidenav').style.width = '0%';
    document.getElementById('fade').style.width = "0";
}