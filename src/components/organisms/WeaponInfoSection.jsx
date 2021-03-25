import InfoWeaponGrid from "../molecules/InfoWeaponGrid";
import ListWeapons from "../atoms/ListWeapons";
import React from "react";

class WeaponInfoSection extends React.Component {
    render() {
        return (
            <section class="weapon">
                <div class="foto-weapon">
                    <img
                        class="foto-weapon-text"
                        src={
                            ListWeapons[this.props.first].weapons[
                                this.props.second
                            ].imgCategory
                        }
                        alt={
                            ListWeapons[this.props.first].weapons[
                                this.props.second
                            ].category
                        }
                    />
                </div>
                <InfoWeaponGrid first={this.props.first} second={this.props.second}/>
            </section>
        );
    }
}

export default WeaponInfoSection;
