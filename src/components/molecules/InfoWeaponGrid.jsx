import React from "react";
import InfoWeaponTop from "./InfoWeaponTop";
import InfoWeaponMedium from "./InfoWeaponMedium";
import StatsWeapon from "../atoms/StatsWeapon";
import WeaponTextName from "../atoms/WeaponTextName";
import ListCharacters from "../atoms/ListCharacters";
import WeaponSkinsContainer from "../molecules/WeaponSkinsContainer";
import ListWeapons from "../atoms/ListWeapons";

class InfoWeaponGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: this.props.first,
            second: this.props.second,
        };
    }

    componentDidMount() {}

    render() {
        return (
            <>
                <div className="info-weapon">
                    <div className="info-weapon-grid-1">
                        <InfoWeaponTop
                            first={this.props.first}
                            second={this.props.second}
                        />
                        <InfoWeaponMedium />
                        <WeaponSkinsContainer />
                    </div>
                    <div className="info-weapon-grid-2">
                        <div className="info-weapon-chart">
                            {ListWeapons[this.props.first].weapons[
                                this.props.second
                            ].weaponStats.map((e) => {
                                return <StatsWeapon stats={e} key={e.title} />;
                            })}
                        </div>
                        <WeaponTextName
                            first={this.props.first}
                            second={this.props.second}
                        />
                        <div className="info-weapon-chart">
                            <video
                                id="video"
                                className="agent-video weapon-video"
                                src={ListCharacters[0].skills[0].video}
                                loop
                                autoPlay
                            ></video>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default InfoWeaponGrid;
