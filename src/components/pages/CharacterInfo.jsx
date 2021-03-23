import CharacterSection from "../organisms/CharacterSection";
import WeaponSection from "../organisms/WeaponSection";

import React, { Component } from "react";

class CharacterInfo extends Component {
    

    render() {
        return (
            <main className="main">
                <CharacterSection />
                <WeaponSection />
            </main>
        );
    }
}

export default CharacterInfo;
