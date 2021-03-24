import ListWeapons from "../atoms/ListWeapons";
import Coins from "../../images/Icons/coins.svg"
import React from "react"

class Weapons extends React.Component {
    render() {
        return(
            <>
        {ListWeapons[Math.floor(Math.random() * ListWeapons.length)].weapons.map((weapon, index) => (
            <div className="armas" key={index}>
                <div className="flex">
                    <h3 className="armas-title">{weapon.category}</h3>
                    <img
                        className="armas-img"
                        src={weapon.image}
                        alt={weapon.name}
                    />
                </div>
                <div className="flex">
                    <p className="armas-text">
                        <strong>{weapon.name}</strong>
                    </p>
                    <div className="icon">
                        <div>
                            <img
                                className="armas-icon"
                                src={Coins}
                                alt="points icon"
                            />
                            <p className="armas-text-coin">
                                <strong>{weapon.points}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
        )
    }
    
}
    

export default Weapons;
