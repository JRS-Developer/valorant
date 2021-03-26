// Imagenes de las armas
import GuardianImaage from "../../images/Weapons/w-guardian.png";
import SpectreImage from "../../images/Weapons/w-spectre.png";
import SheriffImage from "../../images/Weapons/w-sheriff.png";
import ShortyImage from "../../images/Weapons/w-shorty.png";
import StingerImage from "../../images/Weapons/w-stinger.png";
import BullDogImage from "../../images/Weapons/w-bulldog.png";
import ClassicImage from "../../images/Weapons/w-classic.png";
import JudgeImage from "../../images/Weapons/w-judge.png";
import OperatorImage from "../../images/Weapons/w-operator.png";
import GhostImage from "../../images/Weapons/w-ghost.png";
import TacticalKnifeImage from "../../images/Weapons/w-tactical-knife.png";
import AresImage from "../../images/Weapons/w-ares.png";

// Imagenes segun categoria
import SMGSImage from "../../images/Weapons/Categories/SMGS-Text.svg";
import SnipersImage from "../../images/Weapons/Categories/SNIPERS-Text.svg";
import RiflesImage from "../../images/Weapons/Categories/RIFLES-Text.svg";
import SideArmImage from "../../images/Weapons/Categories/SIDEARM-Text.svg";
import MelleImage from "../../images/Weapons/Categories/MELLE-Text.svg";
import MachineGunImage from "../../images/Weapons/Categories/MACHINE-GUN-Text.svg";
import ShotGunImage from "../../images/Weapons/Categories/SHOTGUNS-Text.svg";

// Imagenes del nombre de las armas
import SpectreText from "../../images/Weapons/TextNames/SPECTRE-Text.svg";
import AresText from "../../images/Weapons/TextNames/ARES-Text.svg";
import GuardianText from "../../images/Weapons/TextNames/GUARDIAN-Text.svg";
import SheriffText from "../../images/Weapons/TextNames/SHERIFF-Text.svg";
import BullDogText from "../../images/Weapons/TextNames/BULLDOG-Text.svg";
import StingerText from "../../images/Weapons/TextNames/STINGER-Text.svg";
import ShortyText from "../../images/Weapons/TextNames/SHORTY-Text.svg";
import OperatorText from "../../images/Weapons/TextNames/OPERATOR-Text.svg";
import JudgeText from "../../images/Weapons/TextNames/JUDGE-Text.svg";
import ClassicText from "../../images/Weapons/TextNames/CLASSIC-Text.svg";
import GhostText from "../../images/Weapons/TextNames/GHOST-Text.svg";
import TacticalKnifeText from "../../images/Weapons/TextNames/TACTICAL-KNIFE-Text.svg";

// Iconos de daño
import HeadIcon from "../../images/Weapons/DamageIcons/head.svg"
import BodyIcon from "../../images/Weapons/DamageIcons/body.svg"
import LegIcon from "../../images/Weapons/DamageIcons/leg.svg"

const ListWeapons = [
    {
        key: 0,
        weapons: [
            {
                name: "GUARDIAN",
                id: "guardian",
                category: "RIFLES",
                image: GuardianImaage,
                imgText: GuardianText,
                imgLink: `Guardian`,
                imgCategory: RiflesImage,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "2,400",
                damage: [
                    {
                        zone: "Head",
                        zoneImg: HeadIcon,
                        quantity: "195 DMG",
                        distance: "0 - 50 m"
                    },
                    {
                        zone: "Body",
                        zoneImg: BodyIcon,
                        quantity: "65 DMG",
                        distance: "0 - 50 m"
                    },
                    {
                        zone: "Leg",
                        zoneImg: LegIcon,
                        quantity: "49 DMG",
                        distance: "0 - 50 m"
                    },
                ],
                skins: [{}, {}],
                weaponStats: [
                    {
                        key: "Guardian-Stat-1",
                        title: "Primary Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Semi-Automatic",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "6.5 rounds/sec",
                    },
                    {
                        key: "Guardian-Stat-2",
                        title: "Alternative Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Zoom mode (1.15x)",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "6.5 rounds/sec",
                    },
                    {
                        key: "Guardian-Stat-3",
                        title: "",
                        firstGrayText: "Magazine Capacity : ",
                        firstDarkText: "12",
                        secondGrayText: "Wall Penetration : ",
                        secondDarkText: "Medium",
                    },
                ],
            },
            {
                name: "SPECTRE",
                id: "spectre",
                category: "SMGS",
                image: SpectreImage,
                imgText: SpectreText,
                imgLink: `Spectre`,
                imgCategory: SMGSImage,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "1,600",
                damage: [
                    {
                        zone: "Head",
                        zoneImg: HeadIcon,
                        quantity: "78 DMG",
                        distance: "0 - 20 m"
                    },
                    {
                        zone: "Body",
                        zoneImg: BodyIcon,
                        quantity: "26 DMG",
                        distance: "0 - 20 m"
                    },
                    {
                        zone: "Leg",
                        zoneImg: LegIcon,
                        quantity: "22 DMG",
                        distance: "0 - 20 m"
                    },
                ],
                skins: [{}, {}],
                weaponStats: [
                    {
                        key: "Spectre-Stat-1",
                        title: "Primary Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Full-Automatic",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "13.33 rounds/sec",
                    },
                    {
                        key: "Spectre-Stat-2",
                        title: "Alternative Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Zoom mode (1.15x)",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "12 rounds/sec",
                    },
                    {
                        key: "Spectre-Stat-3",
                        title: "",
                        firstGrayText: "Magazine Capacity : ",
                        firstDarkText: "30",
                        secondGrayText: "Wall Penetration : ",
                        secondDarkText: "Medium",
                    },
                ],
            },
            {
                name: "SHERIFF",
                id: "sheriff",
                category: "SIDEARM",
                image: SheriffImage,
                imgText: SheriffText,
                imgLink: `Sheriff`,
                imgCategory: SideArmImage,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "800",
                skins: [{}, {}],
                damage: [
                    {
                        zone: "Head",
                        zoneImg: HeadIcon,
                        quantity: "160 DMG",
                        distance: "0 - 30 m"
                    },
                    {
                        zone: "Body",
                        zoneImg: BodyIcon,
                        quantity: "55 DMG",
                        distance: "0 - 30 m"
                    },
                    {
                        zone: "Leg",
                        zoneImg: LegIcon,
                        quantity: "47 DMG",
                        distance: "0 - 30 m"
                    },
                ],
                weaponStats: [
                    {
                        key: "Sheriff-Stat-1",
                        title: "Primary Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Semi-Automatic",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "4 rounds/sec",
                    },
                    {
                        key: "Sheriff-Stat-2",
                        title: "",
                        firstGrayText: "",
                        firstDarkText: "",
                        secondGrayText: "",
                        secondDarkText: "",
                    },
                    {
                        key: "Sheriff-Stat-3",
                        title: "",
                        firstGrayText: "Magazine Capacity : ",
                        firstDarkText: "6",
                        secondGrayText: "Wall Penetration : ",
                        secondDarkText: "High",
                    },
                ],
            },
        ],
    },
    {
        key: 1,
        weapons: [
            {
                name: "BULLDOG",
                id: "bulldog",
                category: "RIFLE",
                image: BullDogImage,
                imgText: BullDogText,
                imgLink: `Bulldog`,
                imgCategory: RiflesImage,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "2,100",
                skins: [{}, {}],
                damage: [
                    {
                        zone: "Head",
                        zoneImg: HeadIcon,
                        quantity: "116 DMG",
                        distance: "0 - 50 m"
                    },
                    {
                        zone: "Body",
                        zoneImg: BodyIcon,
                        quantity: "35 DMG",
                        distance: "0 - 50 m"
                    },
                    {
                        zone: "Leg",
                        zoneImg: LegIcon,
                        quantity: "30 DMG",
                        distance: "0 - 50 m"
                    },
                ],
                weaponStats: [
                    {
                        key: "BullDog-Stat-1",
                        title: "Primary Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Full-Automatic",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "9.15 rounds/sec",
                    },
                    {
                        key: "BullDog-Stat-2",
                        title: "Alternative Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Zoom mode (1.25x)",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "4 rounds/sec",
                    },
                    {
                        key: "BullDog-Stat-3",
                        title: "",
                        firstGrayText: "Magazine Capacity : ",
                        firstDarkText: "24",
                        secondGrayText: "Wall Penetration : ",
                        secondDarkText: "Medium",
                    },
                ],
            },
            {
                name: "STINGER",
                id: "stinger",
                category: "SMGS",
                image: StingerImage,
                imgText: StingerText,
                imgLink: `Stinger`,
                imgCategory: SMGSImage,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "1,100",
                skins: [{}, {}],
                damage: [
                    {
                        zone: "Head",
                        zoneImg: HeadIcon,
                        quantity: "67 DMG",
                        distance: "0 - 20 m"
                    },
                    {
                        zone: "Body",
                        zoneImg: BodyIcon,
                        quantity: "27 DMG",
                        distance: "0 - 20 m"
                    },
                    {
                        zone: "Leg",
                        zoneImg: LegIcon,
                        quantity: "23 DMG",
                        distance: "0 - 20 m"
                    },
                ],
                weaponStats: [
                    {
                        key: "Stinger-Stat-1",
                        title: "Primary Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Full-Automatic",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "18 rounds/sec",
                    },
                    {
                        key: "Stinger-Stat-2",
                        title: "Alternative Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Zoom mode (1.15x)",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "4 rounds/sec",
                    },
                    {
                        key: "Stinger-Stat-3",
                        title: "",
                        firstGrayText: "Magazine Capacity : ",
                        firstDarkText: "20",
                        secondGrayText: "Wall Penetration : ",
                        secondDarkText: "Low",
                    },
                ],
            },
            {
                name: "SHORTY",
                id: "shorty",
                category: "SIDEARM",
                image: ShortyImage,
                imgText: ShortyText,
                imgLink: `Shorty`,
                imgCategory: SideArmImage,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "200",
                skins: [{}, {}],
                damage: [
                    {
                        zone: "Head",
                        zoneImg: HeadIcon,
                        quantity: "36 DMG",
                        distance: "0 - 9 m"
                    },
                    {
                        zone: "Body",
                        zoneImg: BodyIcon,
                        quantity: "12 DMG",
                        distance: "0 - 9 m"
                    },
                    {
                        zone: "Leg",
                        zoneImg: LegIcon,
                        quantity: "10 DMG",
                        distance: "0 - 9 m"
                    },
                ],
                weaponStats: [
                    {
                        key: "Shorty-Stat-1",
                        title: "Primary Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Semi-Automatic",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "1.1 rounds/sec",
                    },
                    {
                        key: "Shorty-Stat-2",
                        title: "Alternative Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Semi-Automatic air burst",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "1.1 rounds/sec",
                    },
                    {
                        key: "Shorty-Stat-3",
                        title: "",
                        firstGrayText: "Magazine Capacity : ",
                        firstDarkText: "5",
                        secondGrayText: "Wall Penetration : ",
                        secondDarkText: "Low",
                    },
                ],
            },
        ],
    },
    {
        key: 2,
        weapons: [
            {
                name: "OPERATOR",
                id: "operator",
                category: "SNIPERS",
                image: OperatorImage,
                imgText: OperatorText,
                imgLink: `Operator`,
                imgCategory: SnipersImage,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "2,700",
                skins: [{}, {}],
                damage: [
                    {
                        zone: "Head",
                        zoneImg: HeadIcon,
                        quantity: "255 DMG",
                        distance: "0 - 50 m"
                    },
                    {
                        zone: "Body",
                        zoneImg: BodyIcon,
                        quantity: "150 DMG",
                        distance: "0 - 50 m"
                    },
                    {
                        zone: "Leg",
                        zoneImg: LegIcon,
                        quantity: "127 DMG",
                        distance: "0 - 50 m"
                    },
                ],
                weaponStats: [
                    {
                        key: "Operator-Stat-1",
                        title: "Primary Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Semi-Automatic",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "0.75 rounds/sec",
                    },
                    {
                        key: "Operator-Stat-2",
                        title: "Alternative Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Dual zoom (2.5x, 5x)",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "1.10.75 rounds/sec",
                    },
                    {
                        key: "Operator-Stat-3",
                        title: "",
                        firstGrayText: "Magazine Capacity : ",
                        firstDarkText: "5",
                        secondGrayText: "Wall Penetration : ",
                        secondDarkText: "High",
                    },
                ],
            },
            {
                name: "JUDGE",
                id: "judge",
                category: "SHOTGUNS",
                image: JudgeImage,
                imgText: JudgeText,
                imgLink: `Judge`,
                imgCategory: ShotGunImage,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "1,600",
                skins: [{}, {}],
                damage: [
                    {
                        zone: "Head",
                        zoneImg: HeadIcon,
                        quantity: "34 DMG",
                        distance: "0 - 10 m"
                    },
                    {
                        zone: "Body",
                        zoneImg: BodyIcon,
                        quantity: "17 DMG",
                        distance: "0 - 10 m"
                    },
                    {
                        zone: "Leg",
                        zoneImg: LegIcon,
                        quantity: "14 DMG",
                        distance: "0 - 10 m"
                    },
                ],
                weaponStats: [
                    {
                        key: "Judge-Stat-1",
                        title: "Primary Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Full-Automatic",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "3.5 rounds/sec",
                    },
                    {
                        key: "Judge-Stat-2",
                        title: "",
                        firstGrayText: "",
                        firstDarkText: "",
                        secondGrayText: "",
                        secondDarkText: "",
                    },
                    {
                        key: "Judge-Stat-3",
                        title: "",
                        firstGrayText: "Magazine Capacity : ",
                        firstDarkText: "7",
                        secondGrayText: "Wall Penetration : ",
                        secondDarkText: "Medium",
                    },
                ],
            },
            {
                name: "CLASSIC",
                id: "classic",
                category: "SIDEARM",
                image: ClassicImage,
                imgText: ClassicText,
                imgLink: `Classic`,
                imgCategory: SideArmImage,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "Free",
                damage: [
                    {
                        zone: "Head",
                        zoneImg: HeadIcon,
                        quantity: "78 DMG",
                        distance: "0 - 30 m"
                    },
                    {
                        zone: "Body",
                        zoneImg: BodyIcon,
                        quantity: "26 DMG",
                        distance: "0 - 30 m"
                    },
                    {
                        zone: "Leg",
                        zoneImg: LegIcon,
                        quantity: "22 DMG",
                        distance: "0 - 30 m"
                    },
                ],
                skins: [{}, {}],
                weaponStats: [
                    {
                        key: "Classic-Stat-1",
                        title: "Primary Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Semi-Automatic",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "6.75 rounds/sec",
                    },
                    {
                        key: "Classic-Stat-2",
                        title: "Alternative Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "3-round burst",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "2.22 rounds/sec",
                    },
                    {
                        key: "Classic-Stat-3",
                        title: "",
                        firstGrayText: "Magazine Capacity : ",
                        firstDarkText: "12",
                        secondGrayText: "Wall Penetration : ",
                        secondDarkText: "Low",
                    },
                ],
            },
        ],
    },
    {
        key: 3,
        weapons: [
            {
                name: "ARES",
                id: "ares",
                category: "MACHINE",
                image: AresImage,
                imgText: AresText,
                imgLink: `Ares`,
                imgCategory: MachineGunImage,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "1,600",
                damage: [
                    {
                        zone: "Head",
                        zoneImg: HeadIcon,
                        quantity: "72 DMG",
                        distance: "0 - 30 m"
                    },
                    {
                        zone: "Body",
                        zoneImg: BodyIcon,
                        quantity: "30 DMG",
                        distance: "0 - 30 m"
                    },
                    {
                        zone: "Leg",
                        zoneImg: LegIcon,
                        quantity: "25 DMG",
                        distance: "0 - 30 m"
                    },
                ],
                skins: [{}, {}],
                weaponStats: [
                    {
                        key: "Ares-Stat-1",
                        title: "Primary Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Full-Automatic",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "10-13 rounds/sec",
                    },
                    {
                        key: "Ares-Stat-2",
                        title: "Alternative Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Zoom mode (1.25x)",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "10-13 rounds/sec",
                    },
                    {
                        key: "Ares-Stat-3",
                        title: "",
                        firstGrayText: "Magazine Capacity : ",
                        firstDarkText: "50",
                        secondGrayText: "Wall Penetration : ",
                        secondDarkText: "High",
                    },
                ],
            },
            {
                name: "GHOST",
                id: "ghost",
                category: "SIDEARM",
                image: GhostImage,
                imgText: GhostText,
                imgLink: `Ghost`,
                imgCategory: SideArmImage,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "500",
                damage: [
                    {
                        zone: "Head",
                        zoneImg: HeadIcon,
                        quantity: "105 DMG",
                        distance: "0 - 30 m"
                    },
                    {
                        zone: "Body",
                        zoneImg: BodyIcon,
                        quantity: "30 DMG",
                        distance: "0 - 30 m"
                    },
                    {
                        zone: "Leg",
                        zoneImg: LegIcon,
                        quantity: "26 DMG",
                        distance: "0 - 30 m"
                    },
                ],
                skins: [{}, {}],
                weaponStats: [
                    {
                        key: "Ghost-Stat-1",
                        title: "Primary Fire",
                        firstGrayText: "Fire Mode : ",
                        firstDarkText: "Semi-Automatic",
                        secondGrayText: "Rate of Fire : ",
                        secondDarkText: "10-13 rounds/sec",
                    },
                    {
                        key: "Ghost-Stat-2",
                        title: "",
                        firstGrayText: "",
                        firstDarkText: "",
                        secondGrayText: "",
                        secondDarkText: "",
                    },
                    {
                        key: "Ghost-Stat-3",
                        title: "",
                        firstGrayText: "Magazine Capacity : ",
                        firstDarkText: "15",
                        secondGrayText: "Wall Penetration : ",
                        secondDarkText: "Medium",
                    },
                ],
            },
            {
                name: "TACTICAL KNIFE",
                id: "tactical-knife",
                category: "MELLE",
                image: TacticalKnifeImage,
                imgText: TacticalKnifeText,
                imgLink: `Tactical_knife`,
                imgCategory: MelleImage,
                info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
                points: "Free",
                damage: [
                    {
                        zone: "Head",
                        zoneImg: HeadIcon,
                        quantity: "50 DMG",
                        distance: "0 - 8 m"
                    },
                    {
                        zone: "Body",
                        zoneImg: BodyIcon,
                        quantity: "50 DMG",
                        distance: "0 - 8 m"
                    },
                    {
                        zone: "Leg",
                        zoneImg: LegIcon,
                        quantity: "50 DMG",
                        distance: "0 - 8 m"
                    },
                ],
                skins: [{}, {}],
                weaponStats: [
                    {
                        key: "Knife-Stat-1",
                        title: "",
                        firstGrayText: "",
                        firstDarkText: "",
                        secondGrayText: "",
                        secondDarkText: "",
                    },
                    {
                        key: "Knife-Stat-2",
                        title: "",
                        firstGrayText: "",
                        firstDarkText: "",
                        secondGrayText: "",
                        secondDarkText: "",
                    },
                    {
                        key: "Knife-Stat-3",
                        title: "",
                        firstGrayText: "",
                        firstDarkText: "",
                        secondGrayText: "",
                        secondDarkText: "",
                    },
                ],
            },
        ],
    },
];

export default ListWeapons;
