const EnterChangeHover = (weapon) => {
    const hover = document.getElementById(`hover-${weapon.id}`);
    const boxImg = document.getElementById(`weapon-box--img-${weapon.id}`);
    const container = document.getElementById(
        `weapon-skin-container-${weapon.id}`
    );
    const changeDisplayBlock = () => {
        hover.style.display = "block";
    };
    setTimeout(changeDisplayBlock, 300);
    const changeDisplayNone = () => {
        boxImg.style.display = "none";
        container.style.display = "none";
    };
    setTimeout(changeDisplayNone, 100);
};

export default EnterChangeHover