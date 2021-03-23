import Header from "./components/organisms/Header";
import "../src/styles/css/styles.css";
import Sidenav from "./components/organisms/Sidenav";
import CharacterInfo from "./components/pages/CharacterInfo";
import Footer from "./components/organisms/Footer";
import React, { Component } from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
class App extends Component {
    

    render() {
        return (
            <Router>
                <Header />
                <Sidenav />
                <Switch>
                    <Route path="/Jett">
                        <CharacterInfo />
                    </Route>
                </Switch>
                <div className="fade" id="fade"></div>
                <Footer />
            </Router>
        );
    }
}

export default App;
