import GuardianImaage from "../../images/Weapons/w-guardian.png";
import SpectreImage from "../../images/Weapons/w-spectre.png";
import SheriffImage from "../../images/Weapons/w-sheriff.png";
import ShortyImage from "../../images/Weapons/w-shorty.png";
import StingerImage from "../../images/Weapons/w-stinger.png";
import BullDogImage from "../../images/Weapons/w-bulldog.png";
import ClassicImage from "../../images/Weapons/w-classic.png"
import JudgeImage from "../../images/Weapons/w-judge.png";
import OperatorImage from "../../images/Weapons/w-operator.png";
import GhostImage from "../../images/Weapons/w-ghost.png"
import TacnicalKnifeImage from "../../images/Weapons/w-tactical-knife.png"
import AresImage from "../../images/Weapons/w-ares.png"

const ListWeapons = [
    {
        key: 0,
        weapons: [
            {
                name: "GUARDIAN",
                id: "guardian",
                category: "RIFLES",
                image: GuardianImaage,
                imgText: "",
                imgLink: `Guardian`,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "2,400",
                skins: [{}, {}, {}, {}],
            },
            {
                name: "SPECTRE",
                id: "spectre",
                category: "SMGS",
                image: SpectreImage,
                imgText: "",
                imgLink: `Spectre`,
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
                imgLink: `Sheriff`,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "800",
                skins: [{}, {}, {}, {}],
            }
        ]
    },
    {
        key: 1,
        weapons: [
            {
                name: "BULLDOG",
                id: "bulldog",
                category: "RIFLE",
                image: BullDogImage,
                imgText: "",
                imgLink: `Bulldog`,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "2,100",
                skins: [{}, {}, {}, {}],
            },
            {
                name: "STINGER",
                id: "stinger",
                category: "SMGS",
                image: StingerImage,
                imgText: "",
                imgLink: `Stinger`,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "1,100",
                skins: [{}, {}, {}, {}],
            },
            {
                name: "SHORTY",
                id: "shorty",
                category: "SIDEARM",
                image: ShortyImage,
                imgText: "",
                imgLink: `Shorty`,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "200",
                skins: [{}, {}, {}, {}],
            }
        ]
    },
    {
        key: 2,
        weapons: [
            {
                name: "OPERATOR",
                id: "operator",
                category: "SNIPERS",
                image: OperatorImage,
                imgText: "",
                imgLink: `Operator`,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "2,700",
                skins: [{}, {}, {}, {}],
            },
            {
                name: "JUDGE",
                id: "judge",
                category: "SHOTGUNS",
                image: JudgeImage,
                imgText: "",
                imgLink: `Judge`,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "1,600",
                skins: [{}, {}, {}, {}],
            },
            {
                name: "CLASSIC",
                id: "classic",
                category: "SIDEARM",
                image: ClassicImage,
                imgText: "",
                imgLink: `Classic`,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "Free",
                skins: [{}, {}, {}, {}],
            }
        ]
    },
    {
        key: 3,
        weapons: [
            {
                name: "ARES",
                id: "ares",
                category: "MACHINE",
                image: AresImage,
                imgText: "",
                imgLink: `Ares`,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "1,600",
                skins: [{}, {}, {}, {}],
            },
            {
                name: "GHOST",
                id: "ghost",
                category: "SIDEARM",
                image: GhostImage,
                imgText: "",
                imgLink: `Ghost`,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "500",
                skins: [{}, {}, {}, {}],
            },
            {
                name: "TACTICAL KNIFE",
                id: "tactical-knife",
                category: "MELLE",
                image: TacnicalKnifeImage,
                imgText: "",
                imgLink: `Tactical_knife`,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "Free",
                skins: [{}, {}, {}, {}],
            },
        ]
    },

    
];

export default ListWeapons;
