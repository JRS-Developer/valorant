const StatsWeapon = (props) => (
    <div className="space-txt">
        <h2 className="fire-title">{props.stats.title}</h2>
        <p className="fire-text">
            {props.stats.firstGrayText}
            <strong>{props.stats.firstDarkText}</strong>
        </p>
        <p className="fire-text">
            {props.stats.secondGrayText}
            <strong>{props.stats.secondDarkText}</strong>
        </p>
    </div>
);

export default StatsWeapon;
