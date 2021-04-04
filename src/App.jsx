import Header from "./components/organisms/Header";
import "../src/styles/css/styles.css";
import Sidenav from "./components/organisms/Sidenav";
import CharacterInfoPage from "./components/pages/CharacterInfoPage";
import WeaponInfoPage from "./components/pages/WeaponInfoPage";
import CharacterListPage from "./components/pages/CharacterListPage";
import Footer from "./components/organisms/Footer";
import HomePage from "./components/pages/HomePage"
import React, { Component } from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
class App extends Component {
    

    render() {
        return (
            <Router>
                <Header />
                <Sidenav />
                <Switch>
                    <Route path="/Agents/:name" component={CharacterInfoPage} />
                    <Route path="/Weapons/:name" component={WeaponInfoPage}/>
                    <Route path="/Agents/" exact component={CharacterListPage}/>
                    <Route component={HomePage}/>
                </Switch>
                <div className="fade" id="fade"></div>
                <Footer />
            </Router>
        );
    }
}

export default App;
