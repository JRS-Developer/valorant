import Header from "./components/organisms/Header";
import "../src/styles/css/styles.css";
import Sidenav from "./components/organisms/Sidenav";
import CharacterInfo from "./components/pages/CharacterInfo";
import Footer from "./components/organisms/Footer";
import React from "react";
import DOMLoadedChangeColor from "./scripts/DOMLoadedChangeColor";
import ListCharacters from "./components/atoms/ListCharacters";
class App extends React.Component {
    componentDidMount() {
        DOMLoadedChangeColor(ListCharacters[0].skills[0].skillImageId);
    }

    render() {
        return (
            <>
                <Header />
                <Sidenav />
                <CharacterInfo />
                <div className="fade" id="fade"></div>
                <Footer />
            </>
        );
    }
}

export default App;
