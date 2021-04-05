import CharacterSection from "../organisms/CharacterSection";
import WeaponSection from "../organisms/WeaponSection";
import React from "react"
import ListCharacters from "../atoms/ListCharacters";
import Footer from "../organisms/Footer";
class CharacterInfoPage extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            name: 0
        }
        
    }

    componentDidMount() {
        ListCharacters.forEach(element => {
            if (element.name === this.props.match.params.name) {
                this.setState({name: element.key})
            }
        })
        
    }

    render() {
        return(
            <>
            <main className="main">
                <CharacterSection name={this.state.name}/>
                <WeaponSection name={this.state.name} />
            </main>
            <Footer />
            </>
        )
    }
}



export default CharacterInfoPage;
