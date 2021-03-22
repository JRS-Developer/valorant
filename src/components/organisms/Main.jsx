import {Component} from "react"
import CharacterSection from "./CharacterSection"
import WeaponSection from "./WeaponSection"

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            section: ""
        }
    }

    render() {
        return <main className="main">
            <CharacterSection/>
            <WeaponSection/>
        </main>
    }
}

export default Main