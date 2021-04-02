import LArrow from "../../images/Icons/L-Arrow.svg"
import RArrow from "../../images/Icons/R-Arrow.svg"
import changeColor from "../../scripts/AgentsChangeColor.jsx"
import ListCharacters from "../atoms/ListCharacters";

const Arrow = ({changeIndex, character, index}) => {
        let i = index
        return (
            <>
            <img
                className="arrow absolute l-arrow"
                id="l-arrow"
                src={LArrow}
                alt=""
                onClick={
                    function Change() {
                        i = i -1
                        character = ListCharacters[i]
                        if(i < 0) {
                            i = ListCharacters.length - 1
                            character = ListCharacters[ListCharacters.length - 1]
                            changeColor(character,i,changeIndex)
                            
                        } else {
                            changeColor(character,i,changeIndex)
                        }
                    }
                }
            />
            <img
                className="arrow absolute r-arrow"
                id="r-arrow"
                src={RArrow}
                alt=""
                
                onClick={
                    function Change() {
                        i = i + 1
                        character = ListCharacters[i]
                        if(i === ListCharacters.length || i > ListCharacters.length) {
                            i = 0
                            character = ListCharacters[0]
                            changeColor(character,i,changeIndex)
                        } else {
                            changeColor(character,i,changeIndex)
                        }
                    }
                }
            />
            </>
    
        )
    }
export default Arrow;
