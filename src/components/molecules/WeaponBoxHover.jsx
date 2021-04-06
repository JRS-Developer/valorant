const WeaponBoxHover = ({weapon}) => (
    <div className="weapon-box--hover" id={`hover-${weapon.id}`}>
        <div className="weapon-damage-container">
            <h3 className="wd-h3">{weapon.name}</h3>
            <p className="wd-p">
                {weapon.infoFirst.substring(0, 230) + "..."}
            </p>
            <div className="damage-grid-container">
                {weapon.damage.map((e) => {
                    return (
                        <img
                            key={e.zone}
                            src={e.zoneImg}
                            alt={e.zone}
                            className="damage--item"
                        />
                    );
                })}
                {weapon.damage.map((e, index) => {
                    return (
                        <strong key={`${e.quantity}${index}`} className="damage--text">{e.quantity}</strong>
                    );
                })}
            </div>
        </div>
    </div>
);

export default WeaponBoxHover