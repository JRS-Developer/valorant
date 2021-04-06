const WeaponSkinContainer = ({skin}) => (
    <div className="weapon-skin-container" id={`weapon-skin-container-${skin.id}`}>
        {skin.skins.map((e, index) => {
            return (
                <img key={`${e.name}${index}`} src={e.image} alt={e.name} className="weapon-skin--img" />
            );
        })}
    </div>
);

export default WeaponSkinContainer;
