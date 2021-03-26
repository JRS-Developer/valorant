// Imagenes de los personajes
import JettImage from "../../images/Characters/Jett.webp";
import SageImage from "../../images/Characters/Sage.png";
import PhoenixImage from "../../images/Characters/Phoenix.png";
import SovaImage from "../../images/Characters/Sova.png";

// Imagenes de los nombre de los personajes
import PhoenixImageText from "../../images/Characters/PHOENIX Name.svg";
import SovaImageText from "../../images/Characters/SOVA Name.svg";
import SageImageText from "../../images/Characters/SAGE Name.svg";
import JettImageText from "../../images/Characters/JETT Name.svg";

// Imagenes de las habilidades
import CloudburstImage from "../../images/Skills/R-CLOUDBURST.svg";
import BladestormImage from "../../images/Skills/R-BLADE-STORM.svg";
import TailwindImage from "../../images/Skills/R-Tailwind.svg";
import UpdraftImage from "../../images/Skills/R-UPDRAFT.svg";
import SlowOrbImage from "../../images/Skills/Slow-Orb.svg";
import HealingOrbImage from "../../images/Skills/Healing-Orb.svg";
import BarrierOrbImage  from "../../images/Skills/Barrier-Orb.svg"
import ResurrectionImage  from "../../images/Skills/Resurrection.svg"
import ShockBoltImage from "../../images/Skills/Shock-Bolt.svg";
import HuntersFuryImage from "../../images/Skills/Hunters-Fury.svg";
import ReconBoltImage from "../../images/Skills/Recon-Bolt.svg";
import OlwDroneImage from "../../images/Skills/Owl-Drone.svg";
import BlazeImage from "../../images/Skills/Blaze.svg";
import CurveBallImage from "../../images/Skills/CurveBall.svg";
import HotHandsImage from "../../images/Skills/HOT-HANDS.svg";
import RunItBackImage from "../../images/Skills/RUN-IT-BACK.svg";

// Videos de las habilidades
import BlazeVideo from "../../videos/Phoenix_C_v001_web.mp4";
import CurveBallVideo from "../../videos/Phoenix_Q_v001_web.mp4";
import HotHandsVideo from "../../videos/Phoenix_E_v001_web.mp4";
import RunItBackVideo from "../../videos/Phoenix_X_v001_web.mp4"
import ShockBoltVideo from "../../videos/Sova_Q_v001_web.mp4"
import OlwDroneVideo from "../../videos/Sova_C_v001_web.mp4"
import ReconBoltVideo from "../../videos/Sova_E_v001_web.mp4"
import HuntersFuryVideo from "../../videos/Sova_X_v001_web.mp4"
import CloudBurstVideo from "../../videos/Jett_C_v001_web.mp4";
import UpdraftVideo from "../../videos/Jett_Q_v001_web.mp4";
import TailWindVideo from "../../videos/Jett_E_v001_web.mp4";
import BladeStormVideo from "../../videos/Jett_X_v001_web.mp4";
import BarrierOrbVideo from "../../videos/Sage_C_v001_web.mp4";
import SlowOrbVideo from "../../videos/Sage_Q_v001_web.mp4";
import HealingOrbVideo from "../../videos/Sage_E_v001_web.mp4";
import ResurrectionVideo from "../../videos/Sage_X_v001_web.mp4";

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
                    "Throw out a cloud of fog that obscures vision on impact. Hold down the ability button to bend the cloud’s in-flight trajectory.",
                skillContainerId: "cloudburst-container",
                skillImageId: "cloudburst",
                skillImageLink: CloudburstImage,
                video: CloudBurstVideo,
            },
            {
                key: 0,
                id: "updraft-skill",
                title: "UPDRAFT",
                text: "After a brief wind up, propel yourself upwards.",
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
                    "Immediately dash a short distance in the direction you’re moving.",
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
                    "Arm yourself with several deadly throwing knives that deal moderate damage and kill on headshots. Scoring a kill restores all daggers. Left click throws a single dagger. Right click throws all remaining daggers in a short-ranged burst.",
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
                    'Equip a barrier orb. Fire places a solid wall. Alternate fire rotates the targeter.',
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
                    "Equip an orb to heal Sage or an ally, slowly recovering health lost.",
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
    {
        key: 2,
        name: "Phoenix",
        id: "phoenix",
        country: "United Kingdom",
        signature: "Hot Hands",
        abilities: "Blaze, Curveball",
        ultimate: "Run It Back",
        image: PhoenixImage,
        imgText: PhoenixImageText,
        info: `Phoenix’s star power shines through in his fighting style, igniting the battlefield with his flash and flare. Whether he’s got backup or not, he’s rushing in to fight on his own terms.`,
        restInfo: `The fiery Brit can wield the power of flame to essentially reshape the battlefield into how he sees fit. With exploding fireballs that damage enemies and heal him, a vision-blocking wall of fire, and a blinding fire burst, Phoenix is great at manipulating the flow of the match. His ultimate grants him the ability to be reborn if he's killed during its duration, galvanizing him to make bold moves he wouldn't otherwise make.`,
        skills: [
            {
                key: 2,
                id: "blaze-skill",
                title: "BLAZE",
                text:
                    'Cast out a flame wall that blocks vision and damages anyone passing through it. You can bend the wall when casting by turning while holding left click.',
                skillContainerId: "blaze-container",
                skillImageId: "blaze",
                skillImageLink: BlazeImage,
                video: BlazeVideo,
            },
            {
                key: 2,
                id: "curveball-skill",
                title: "CURVEBALL",
                text:
                    "A flare orb that takes a curving path and detonates shortly after throwing.",
                skillContainerId: "curveball-container",
                skillImageId: "curveball",
                skillImageLink: CurveBallImage,
                video: CurveBallVideo,
            },
            {
                key: 2,
                id: "hot-hands-skill",
                title: "HOT HANDS",
                text:
                    "Throw a fireball that explodes after a delay or upon impact with the ground. The fire zone damages enemies, and heals you.",
                skillContainerId: "hot-hands-container",
                skillImageId: "hot-hands",
                skillImageLink: HotHandsImage,
                video: HotHandsVideo,
            },
            {
                key: 2,
                id: "run-it-back-skill",
                title: "RUN IT BACK",
                text:
                    "Mark your current location. If you die during this ability’s duration, or when this ability’s duration expires, you’ll be reborn at the marked location with full health.",
                skillContainerId: "run-it-back-container",
                skillImageId: "run-it-back",
                skillImageLink: RunItBackImage,
                video: RunItBackVideo,
            },
        ],
    },
    {
        key: 3,
        name: "Sova",
        id: "sova",
        country: "Russia",
        signature: "Recon Bolt",
        abilities: "Owl Drone, Shock Bolt",
        ultimate: "Hunter's Fury",
        image: SovaImage,
        imgText: SovaImageText,
        info: `Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.`,
        restInfo: `An archery expert, he can equip his bow with different bolts that reveal enemy locations or shock nearby adversaries. He can also deploy a recon drone to survey the battlefield, while his ultimate lets him fire three deadly arrow shots through walls.`,
        skills: [
            {
                key: 3,
                id: "shock-bolt-skill",
                title: "SHOCK BOLT",
                text:
                    'Fire an explosive bolt that emits a damaging pulse of static energy upon impact.',
                skillContainerId: "shock-bolt-container",
                skillImageId: "shock-bolt",
                skillImageLink: ShockBoltImage,
                video: ShockBoltVideo,
            },
            {
                key: 3,
                id: "owl-drone-skill",
                title: "OWL DRONE",
                text:
                    "Deploy a pilotable drone that can fire a dart that will reveal enemies who are hit.",
                skillContainerId: "owl-drone-container",
                skillImageId: "owl-drone",
                skillImageLink: OlwDroneImage,
                video: OlwDroneVideo,
            },
            {
                key: 3,
                id: "recon-bolt-skill",
                title: "RECON BOLT",
                text:
                    "Fire a bolt that deploys a sonar emitter. The sonar pings tag nearby enemies, causing them to be revealed. Can be destroyed.",
                skillContainerId: "recon-bolt-container",
                skillImageId: "recon-bolt",
                skillImageLink: ReconBoltImage,
                video: ReconBoltVideo,
            },
            {
                key: 3,
                id: "hunters-fury-skill",
                title: "HUNTER'S FURY",
                text:
                    "Fire up to three deadly energy blasts that spear across the entire map. Each hit enemy takes heavy damage and is marked.",
                skillContainerId: "hunters-fury-container",
                skillImageId: "hunters-fury",
                skillImageLink: HuntersFuryImage,
                video: HuntersFuryVideo,
            },
        ],
    },
];

export default ListCharacters;
