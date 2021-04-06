const LeaveChangeHover = (weapon) => {
    const hover = document.getElementById(`hover-${weapon.id}`);
    const boxImg = document.getElementById(`weapon-box--img-${weapon.id}`);
    const container = document.getElementById(
        `weapon-skin-container-${weapon.id}`
    );
    const changeDisplayBlock = () => {
        boxImg.style.display = "block";
        container.style.display = "flex";
    };
    setTimeout(changeDisplayBlock, 300);
    const changeDisplayNone = () => {
        hover.style.display = "none";
    };
    setTimeout(changeDisplayNone, 100);
};

export default LeaveChangeHover;
