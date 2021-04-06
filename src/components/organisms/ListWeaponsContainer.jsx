import WeaponBoxImg from "../atoms/WeaponBoxImg";
import WeaponSkinContainer from "../molecules/WeaponSkinContainer";
import WeaponBoxHover from "../molecules/WeaponBoxHover";
import EnterChangeHover from "../../scripts/EnterChangeHover";
import LeaveChangeHover from "../../scripts/LeaveChangeHover";
import React from "react";
import {Link} from "react-router-dom"

class ListWeaponsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            state: 0,
        };
    }
    componentDidMount() {
        console.log(this.props.weapons);
    }

    render() {
        return (
            <div className="list-weapons-container">
                {this.props.weapons.map((e) => {
                    return (
                        <Link to={`/Weapons/${e.imgLink}/`}>
                        <div
                            className="weapon-box"
                            
                        >
                            <WeaponBoxHover weapon={e}/>
                            <WeaponBoxImg img={e} />
                            <WeaponSkinContainer skin={e}/>
                        </div>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default ListWeaponsContainer;
