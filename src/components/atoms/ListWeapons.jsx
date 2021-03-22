import GuardianImaage from "../../images/weapon-guardian.svg";
import SpectreImage from "../../images/weapon_spec.svg";
import SheriffImage from "../../images/weapon_sheriff.svg";


const ListWeapons = [
    {
        name: "GUARDIAN",
        id: "guardian",
        category: "RIFLES",
        image: GuardianImaage,
        imgText: "",
        info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
        points: "2,700",
        skins: [{}, {}, {}, {}],
    },
    {
        name: "SPECTRE",
        id: "spectre",
        category: "SMGS",
        image: SpectreImage,
        imgText: "",
        info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
        points: "1,600",
        skins: [{}, {}, {}, {}],
    },
    {
        name: "SHERIFF",
        id: "sheriff",
        category: "SIDEARM",
        image: SheriffImage,
        imgText: "",
        info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
        points: "900",
        skins: [{}, {}, {}, {}],
    },
    
];

export default ListWeapons;
