import CloudburstImage from "../../images/R-CLOUDBURST.svg";
import BladestormImage from "../../images/R-BLADE-STORM.svg";
import TailwindImage from "../../images/R-Tailwind.svg";
import UpdraftImage from "../../images/R-UPDRAFT.svg";
import JettImage from "../../images/Jett.webp";
import JettImageText from "../../images/JETT Name.svg";
import CloudBurstVideo from "../../videos/Jett_C_v001_web.mp4";
import UpdraftVideo from "../../videos/Jett_Q_v001_web.mp4";
import TailWindVideo from "../../videos/Jett_E_v001_web.mp4";
import BladeStormVideo from "../../videos/Jett_X_v001_web.mp4";
import BarrierOrbVideo from "../../videos/Sage_C_v001_web.mp4";
import SlowOrbVideo from "../../videos/Sage_Q_v001_web.mp4";
import HealingOrbVideo from "../../videos/Sage_E_v001_web.mp4";
import ResurrectionVideo from "../../videos/Sage_X_v001_web.mp4";
import SageImage from "../../images/Sage.png";
import SageImageText from "../../images/SAGE Name.svg";
import SlowOrbImage from "../../images/Slow-Orb.svg";
import HealingOrbImage from "../../images/Healing-Orb.svg";
import BarrierOrbImage  from "../../images/Barrier-Orb.svg"
import ResurrectionImage  from "../../images/Resurrection.svg"

const ListCharacters = [
    {
        key: 0,
        name: "Jett",
        id: "jett",
        country: "South Korea",
        signature: "Tailwind",
        abilities: "Cloudburst, Updraft",
        ultimate: "Blade Storm",
        image: JettImage,
        imgText: JettImageText,
        info: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
        restInfo: `There are a total of six groups of weapons that players will be able to purchase at the start of each round with each costing a different amount based on their power and weapon type. None of the weapons are tied exclusively to a specific character, so players will be able to use any of the weapons available in the FPS, no matter the character they are using for a particular match.`,
        skills: [
            {
                key: 0,
                id: "cloudburst-skill",
                title: "CLOUDBURST",
                text:
                    "Deploys a cloud of smoke that obstructs the enemy's vision. Press the skill button a second time to lift the cloud.",
                skillContainerId: "cloudburst-container",
                skillImageId: "cloudburst",
                skillImageLink: CloudburstImage,
                video: CloudBurstVideo,
            },
            {
                key: 0,
                id: "updraft-skill",
                title: "UPDRAFT",
                text: "INSTANTLY propel Jett high into the air.",
                skillContainerId: "updraft-container",
                skillImageId: "updraft",
                skillImageLink: UpdraftImage,
                video: UpdraftVideo,
            },
            {
                key: 0,
                id: "tailwind-skill",
                title: "TAILWIND",
                text:
                    "INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.",
                skillContainerId: "tailwind-container",
                skillImageId: "tailwind",
                skillImageLink: TailwindImage,
                video: TailWindVideo,
            },
            {
                key: 0,
                id: "bladestorm-skill",
                title: "BLADE STORM",
                text:
                    "EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.",
                skillContainerId: "blade-storm-container",
                skillImageId: "blade-storm",
                skillImageLink: BladestormImage,
                video: BladeStormVideo,
            },
        ],
    },
    {
        key: 1,
        name: "Sage",
        id: "sage",
        country: "China",
        signature: "Healing Orb",
        abilities: "Barrier Orb, Slow Orb",
        ultimate: "Resurrection",
        image: SageImage,
        imgText: SageImageText,
        info: `Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off forceful assaults, she provides a calm center to a hellish battlefield.`,
        restInfo: `The most prominent support character to date hails from China and brings orbs that heal allies, slow enemies, and create barriers out of the ground to impede the flow of a match. Her ultimate ability allows her to resurrect a fallen ally,which is significant in a game with no respawns.`,
        skills: [
            {
                key: 1,
                id: "barrier-orb-skill",
                title: "BARRIER ORB",
                text:
                    'Equip a barrier orb. Fire places a solid wall. Alternate fire rotates the targeter. The wall "fortifies" after a 3-second delay, increasing its health. Shortly before expiring, the wall rapidly loses health.',
                skillContainerId: "barrier-orb-container",
                skillImageId: "barrier-orb",
                skillImageLink: BarrierOrbImage,
                video: BarrierOrbVideo,
            },
            {
                key: 1,
                id: "slow-orb-skill",
                title: "SLOW ORB",
                text:
                    "Equip a Slowing Orb. Fire to launch the Orb, which expands upon hitting the ground, creating a zone that slows players who walk on it.",
                skillContainerId: "slow-orb-container",
                skillImageId: "slow-orb",
                skillImageLink: SlowOrbImage,
                video: SlowOrbVideo,
            },
            {
                key: 1,
                id: "healing-orb-skill",
                title: "HEALING ORB",
                text:
                    "Equip a healing orb. Fire with your crosshairs over a damaged ally to activate a heal-over-time on them. Alternate fire while Sage is damaged to activate a self heal-over-time. The heal will stop upon taking damage.",
                skillContainerId: "healing-orb-container",
                skillImageId: "healing-orb-orb",
                skillImageLink: HealingOrbImage,
                video: HealingOrbVideo,
            },
            {
                key: 1,
                id: "resurrection-skill",
                title: "RESURRECTION",
                text:
                    "Equip a resurrection ability. Fire with your crosshairs placed over an ally's corpse to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
                skillContainerId: "resurrection-container",
                skillImageId: "resurrection",
                skillImageLink: ResurrectionImage,
                video: ResurrectionVideo,
            },
        ],
    },
    {},
    {},
    {},
];

export default ListCharacters;
