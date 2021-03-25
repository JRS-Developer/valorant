const StatsWeapon = (props) => (
    <div class="space-txt">
        <h2 class="fire-title">{props.stats.title}</h2>
        <p class="fire-text">
            {props.stats.firstGrayText}
            <strong>{props.stats.firstDarkText}</strong>
        </p>
        <p class="fire-text">
            {props.stats.secondGrayText}
            <strong>{props.stats.secondDarkText}</strong>
        </p>
    </div>
);

export default StatsWeapon;
