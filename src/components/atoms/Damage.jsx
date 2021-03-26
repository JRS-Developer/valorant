const Damage = () => (
    <div className="armas damage">
        <div className="flex">
            <h3 className="armas-title">78 DMG</h3>
            <img
                className="armas-img fix-img damage-img"
                src="/assets/images/head.svg"
                alt="Head"
            />
        </div>
        <div className="flex">
            <p className="armas-text">
                <strong>0 - 20 m</strong>
            </p>
            <div className="icon damage-background"></div>
        </div>
    </div>
);

export default Damage;
