import CharacterSection from "../organisms/CharacterSection";
import WeaponSection from "../organisms/WeaponSection";


const CharacterInfo = ({ match }) => (
            <main className="main">
                <CharacterSection name={match.params.name}/>
                <WeaponSection />
            </main>
        );

export default CharacterInfo;
