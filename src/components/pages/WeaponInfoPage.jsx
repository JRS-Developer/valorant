import React from "react";
import WeaponInfoSection from "../organisms/WeaponInfoSection";
import DamageSection from "../organisms/DamageSection";
import ListWeapons from "../atoms/ListWeapons";
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
                        secondPosition: i
                    })
                    console.log(index, i)
                }
            });
        });
    }

    render() {
        return (
            <>
                <WeaponInfoSection first={this.state.firstPosition} second={this.state.secondPosition}/>
                <DamageSection first={this.state.firstPosition} second={this.state.secondPosition}/>
            </>
        );
    }
}

export default WeaponInfoPage;
