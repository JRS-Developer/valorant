import GuardianImaage from "../../images/Weapons/w-guardian.png";
import SpectreImage from "../../images/Weapons/w-spectre.png";
import SheriffImage from "../../images/Weapons/w-sheriff.png";
import ShortyImage from "../../images/Weapons/w-shorty.png";

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
