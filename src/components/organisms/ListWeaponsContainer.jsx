import WeaponBoxImg from "../atoms/WeaponBoxImg";
import WeaponBoxHover from "../molecules/WeaponBoxHover";
import React from "react";
import {Link} from "react-router-dom"

class ListWeaponsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            state: 0,
        };
    }

    render() {
        return (
            <div className="list-weapons-container">
                {this.props.weapons.map((e) => {
                    return (
                        <Link to={`/Weapons/${e.imgLink}/`} key={e.name}>
                        <div
                            className="weapon-box"
                            
                        >
                            <h3 className="wp-h3">{e.name}</h3>
                            <WeaponBoxHover weapon={e}/>
                            <WeaponBoxImg img={e} />
                        </div>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default ListWeaponsContainer;
