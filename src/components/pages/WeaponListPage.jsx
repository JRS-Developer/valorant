import React from "react";
import Arsenal from "../atoms/Arsenal";
import CategoryContainer from "../atoms/CategoryContainer";
import ListWeaponsContainer from "../organisms/ListWeaponsContainer";
import ListWeapons from "../atoms/ListWeapons";
import Footer from "../organisms/Footer";
class WeaponListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
        };
    }
    componentDidMount() {
        var Categories = [];
        var SideArm = [];
        var Smgs = [];
        var Melle = [];
        var Snipers = [];
        var Shotguns = [];
        var Rifles = [];
        var Machines = [];
        ListWeapons.forEach((list) => {
            list.weapons.forEach((weapon) => {
                switch (weapon.category) {
                    case "SMGS":
                        Smgs.push(weapon);
                        break;
                    case "RIFLES":
                        Rifles.push(weapon);
                        break;
                    case "MELLE":
                        Melle.push(weapon);
                        break;
                    case "SIDEARM":
                        SideArm.push(weapon);
                        break;
                    case "MACHINE":
                        Machines.push(weapon);
                        break;
                    case "SHOTGUNS":
                        Shotguns.push(weapon);
                        break;
                    case "SNIPERS":
                        Snipers.push(weapon);
                        break;
                    default:
                        break;
                }
            });
        });
        Categories.push(
            SideArm,
            Smgs,
            Melle,
            Snipers,
            Shotguns,
            Rifles,
            Machines
        );
        this.setState({
            categories: Categories,
            sections: [SideArm,
                Smgs,
                Melle,
                Snipers,
                Shotguns,
                Rifles,
                Machines],
        });
    }
    render() {
        return (
            <>
            <div className="black-background">
                <Arsenal />
                {this.state.categories.map((e, index) => {
                    return (
                        <>
                            <CategoryContainer category={e[0].category} />
                            <ListWeaponsContainer weapons={this.state.sections[index]}/>
                        </>
                    );
                })}
            </div>
            <Footer />
            </>
        );
    }
}

export default WeaponListPage;
