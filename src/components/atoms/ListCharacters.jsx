import CloudburstImage from "../../images/R-CLOUDBURST.svg"
import BladestormImage from "../../images/R-BLADE-STORM.svg"
import TailwindImage from "../../images/R-Tailwind.svg"
import UpdraftImage from "../../images/R-UPDRAFT.svg"
import image from "../../images/Jett_artwork.webp"
import imgText from "../../images/JETT (1).svg"
import video1 from "../../videos/Jett_C_v001_web.mp4"
import video2 from "../../videos/Jett_E_v001_web.mp4"
import video3 from "../../videos/Jett_Q_v001_web.mp4"
import video4 from "../../videos/Jett_X_v001_web.mp4"


const ListCharacters = [
    {
        name: "Jett",
        id: 'jett',
        country: "South Korea",
        signature: "Tailwind",
        abilities: "Cloudburst, Updraft",
        ultimate: "Blade Storm",
        image: image,
        imgText: imgText,
        info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
        restInfo: `There are a total of six groups of weapons that players will be able to purchase at the start of each round with each costing a different amount based on their power and weapon type. None of the weapons are tied exclusively to a specific character, so players will be able to use any of the weapons available in the FPS, no matter the character they are using for a particular match.`,
        skills: [
            {
                id: "1-skill",
                title: "CLOUDBURST",
                text:
                    "Deploys a cloud of smoke that obstructs the enemy's vision. Press the skill button a second time to lift the cloud.",
                skillContainerId: "cloudburst-container",
                skillImageId: "cloudburst",
                skillImageLink: CloudburstImage,
                video: video1,
            },
            {
                id: "2-skill",
                title: "UPDRAFT",
                text: "INSTANTLY propel Jett high into the air.",
                skillContainerId: "updraft-container",
                skillImageId: "updraft",
                skillImageLink: UpdraftImage,
                video: video2,
            },
            {
                id: "3-skill",
                title: "TAILWIND",
                text:
                    "INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.",
                skillContainerId: "tailwind-container",
                skillImageId: "tailwind",
                skillImageLink: TailwindImage,
                video: video3,
            },
            {
                id: "4-skill",
                title: "BLADE STORM",
                text:
                    "EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.",
                skillContainerId: "blade-storm-container",
                skillImageId: "blade-storm",
                skillImageLink: BladestormImage,
                video: video4,
            },
        ]
    },
    {},
    {},
    {},
    {},
];

export default ListCharacters;
