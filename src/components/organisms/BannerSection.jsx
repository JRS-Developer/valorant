import ActionButton from "../atoms/ActionButton";
import ListCharacters from "../atoms/ListCharacters";

const BannerSection = () => (
    <section className="banner-section">
        <div className="characters-banner">
            {ListCharacters.map((e) => {
                return (
                    <img
                        draggable="false"
                        className="characters-banner--img"
                        src={e.agentImage}
                        alt={e.name}
                    />
                );
            })}
        </div>
        <h2 className="banner-section--h2">
            A 5v5 character-based tactical shooter
        </h2>
        <h1 className="banner-section--h1">VALORANT</h1>
        <a href="https://playvalorant.com/" target="_blank" rel="noreferrer"><ActionButton color="black" text="PLAY VALORANT" /></a>
    </section>
);

export default BannerSection