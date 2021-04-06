const SkinOpacity = ({skin}) => {
    let weapon = skin.skins[Math.floor(Math.random() * 2)]
    return(
    <div className="skin-opacity--background">
        <img
            className="skin-opacity--img"
            src={weapon.image}
            alt={weapon.name}
        />
    </div>)
};

export default SkinOpacity