import Header from "./components/organisms/Header";
import "../src/styles/css/styles.css";
import Sidenav from "./components/organisms/Sidenav";
import Main from "./components/organisms/Main";
import React from "react";


// import "./scripts/scripts"

class App extends React.Component {
    

    render() {
        return (
            <>
                <Header />
                <Sidenav />
                <Main />
                <div className="fade" id="fade"></div>
                <footer className="footer"></footer>
            </>
        );
    }
    
}

export default App;

