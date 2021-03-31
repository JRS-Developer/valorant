const Damage = ({damage}) => (
    <div className="armas damage">
        <div className="flex">
            <h4 className="armas-title">{damage.quantity}</h4>
            <img
                className="armas-img fix-img damage-img"
                src={damage.zoneImg}
                alt={damage.zone}
            />
        </div>
        <div className="flex">
            <p className="armas-text">
                <strong>{damage.distance}</strong>
            </p>
            <div className="icon damage-background"></div>
        </div>
    </div>
);

export default Damage;
