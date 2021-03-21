import Header from "./components/organisms/Header";
import "../src/styles/css/styles.css";
import Sidenav from "./components/organisms/Sidenav";

// import "./scripts/scripts"

const App = () => (
    <>
        <Header />
        <Sidenav />
        <div className="fade" id="fade"></div>
    </>
);

export default App;
