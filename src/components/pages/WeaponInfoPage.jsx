import React from "react";
import WeaponInfoSection from "../organisms/WeaponInfoSection";
import DamageSection from "../organisms/DamageSection";
import ListWeapons from "../atoms/ListWeapons";
import Footer from "../organisms/Footer";
class WeaponInfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstPosition: 0,
            secondPosition: 0,
        };
    }

    componentDidMount() {
        ListWeapons.forEach((element, index) => {
            element.weapons.forEach((e, i) => {
                if (e.imgLink === this.props.match.params.name) {
                    this.setState({
                        firstPosition: index,
                        secondPosition: i,
                    });
                }
            });
        });
    }

    render() {
        return (
            <>
            <main className="main">
                <WeaponInfoSection
                    first={this.state.firstPosition}
                    second={this.state.secondPosition}
                />
                <DamageSection
                    first={this.state.firstPosition}
                    second={this.state.secondPosition}
                />
            </main>
            <Footer />
            </>
        );
    }
}

export default WeaponInfoPage;
