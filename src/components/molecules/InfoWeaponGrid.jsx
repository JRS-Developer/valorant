import React from "react";
import InfoWeaponTop from "./InfoWeaponTop";
import InfoWeaponMedium from "./InfoWeaponMedium";
import StatsWeapon from "../atoms/StatsWeapon";
import WeaponTextName from "../atoms/WeaponTextName";
import ListCharacters from "../atoms/ListCharacters"
import WeaponSkinsContainer from "../molecules/WeaponSkinsContainer"

class InfoWeaponGrid extends React.Component {
    render() {
        return (
            <>
                <div class="info-weapon">
                    <div class="info-weapon-grid-1">
                        <InfoWeaponTop />
                        <InfoWeaponMedium />
                        <WeaponSkinsContainer />
                    </div>
                    <div class="info-weapon-grid-2">
                        <div class="info-weapon-chart">
                            <StatsWeapon />
                            <StatsWeapon />
                            <StatsWeapon />
                        </div>
                        <WeaponTextName />
                        <div class="info-weapon-chart">
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
