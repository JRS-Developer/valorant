import AgentsImage from "../atoms/AgentsImage"
import AgentsGrid from "../organisms/AgentsGrid"

const CharacterListPage = () => (
    <main className="main">
        <section className="listcharacter-section">
            <AgentsImage />
            <AgentsGrid />
        </section>
    </main>
);
export default CharacterListPage;
