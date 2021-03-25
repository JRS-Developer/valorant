import React from "react"
import WeaponInfoSection from "../organisms/WeaponInfoSection"
import DamageSection from "../organisms/DamageSection"

class WeaponInfoPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 0
        }
    }

    render() {
        return(
            <>
            <WeaponInfoSection />
            <DamageSection />
            </>
        )
    }
}

export default WeaponInfoPage