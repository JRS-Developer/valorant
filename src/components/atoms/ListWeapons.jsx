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

// Skins de las armas
import InfantrySpectreSkin from "../../images/Weapons/Weapons-Skins/infantry_spectre.png"
import SplineSpectreSkin from "../../images/Weapons/Weapons-Skins/spline_spectre.png"
import OniGuardianSkin from "../../images/Weapons/Weapons-Skins/oni_guardian.png"
import ReaverGuardianSkin from "../../images/Weapons/Weapons-Skins/reaver_guardian.png"
import WastelandSheriffSkin from "../../images/Weapons/Weapons-Skins/wasteland_sheriff.png"
import SakuraSheriffSkin from "../../images/Weapons/Weapons-Skins/sakura_sheriff.png"
import AristocratBulldogSkin from "../../images/Weapons/Weapons-Skins/aristocrat_bulldog.png"
import HorizonBulldogSkin from "../../images/Weapons/Weapons-Skins/horizon_bulldog.png"
import EgoStingerSkin from "../../images/Weapons/Weapons-Skins/ego_stinger.png"
import SovereignStingerSkin from "../../images/Weapons/Weapons-Skins/sovereign_stinger.png"
import OniShortySkin from "../../images/Weapons/Weapons-Skins/oni_shorty.png"
import PrismIIShortySkin from "../../images/Weapons/Weapons-Skins/prism-2_shorty.png"
import ElderfralmeOperatorSkin from "../../images/Weapons/Weapons-Skins/elderflame_operator.png"
import ReaverOperatorSkin from "../../images/Weapons/Weapons-Skins/reaver_operator.png"
import CelestialJudgeSkin from "../../images/Weapons/Weapons-Skins/celestial_judge.png"
import GlitchpopJudgeSkin from "../../images/Weapons/Weapons-Skins/glitchpop_judge.png"
import ImperiumClassicSkin from "../../images/Weapons/Weapons-Skins/imperium_classic.png"
import AvalancheClassicSkin from "../../images/Weapons/Weapons-Skins/avalanche_classic.png"
import InfantryAresSkin from "../../images/Weapons/Weapons-Skins/infantry_ares.png"
import SingularityAresSkin from "../../images/Weapons/Weapons-Skins/singularity_ares.png"
import WinterWonderlandGhostSkin from "../../images/Weapons/Weapons-Skins/winter_wonderland_ghost.png"
import PrismGhostSkin from "../../images/Weapons/Weapons-Skins/prism_ghost.png"
import LuxeKnifeSkin from "../../images/Weapons/Weapons-Skins/luxe_knife.png"
import GlitchpopKnifeSkin from "../../images/Weapons/Weapons-Skins/glitchpop_knife.png"

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
                infoFirst: `The Guardian is a semi automatic rifle that sits at a moderate price of 2,400 compared to other rifles. The Guardian is unique for being the only semi automatic rifle, having a 1.5x zoom as well as the highest damage per bullet compared to any other rifles. It is also the lowest first shot spread weapon in the game.`,
                infoSecond: `The Guardian, though being semi-automatic, can still fire decently fast at 5.25 rounds per second. The Guardian shines at one aspect, its damage per bullet. It is a 4 to the legs, 3 to the body and 1 to the head at any range.

                The Rifle shines on the defensive side, as with its extreme damage per bullet and 1.5x zoom makes it a dangerous rifle to peek, especially since it's a guaranteed one tap to the head.`,
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
                skins: [{
                    name: "Reaver Guardian",
                    image: ReaverGuardianSkin,
                    points: "1775",
                }, {
                    name: "Oni Guardian",
                    image: OniGuardianSkin,
                    points: "1775",
                }],
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
                infoFirst: `The Spectre is a moderately-priced submachine gun that occupies its wielder's primary weapon slot. It is outfitted with a silencer that reduces the range of the weapon's audio profile. In comparison to the Stinger, it is substantially more accurate, kicks considerably less, possesses slightly more cover piercing capability, and has a higher magazine capacity (30 as opposed to 20). However, its slightly lower per-shot damage and lessened fire rate render its total output statistically lower.`,
                infoSecond: `The weapon is a useful force buy if your team is strapped for cash, and is markedly effective at close ranges, especially on unarmoured targets. Its quietened firing sound can also come in handy for ambushing enemies, as less alert players may not have their attention drawn by your shots. However, as players acquire higher-damage rifles, it loses its effectiveness later in the game, where its role is better filled by the Phantom assault rifle, which, like the Spectre, is suppressed, and, differently, has the potential to kill an enemy in a single headshot (granted that the target lacks sufficient armor points), and has a much greater effective range with better penetration capability.`,
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
                skins: [{
                    name: "Infantry Spectre",
                    image: InfantrySpectreSkin,
                    points: "875",
                }, {
                    name: "Spline Spectre",
                    image: SplineSpectreSkin,
                    points: "1775",
                }],
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
                infoFirst: `The Sheriff is the most expensive sidearm in the game, costing 800 Credits. It is a semi-automatic revolver with a six-shot magazine and high damage output.`,
                infoSecond: `The sidearm is extremely useful for economy and pistol rounds, due to its relatively cheap price and high damage output, rivalling that of most rifles. It typically takes 4 shots to the legs, 3 to the body, and 1 to the head to kill.

                The main disadvantage of the Sheriff is in its long pullout time and severe recoil. It has the most recoil of any pistol and takes quite a bit of time to recover.`,
                points: "800",
                skins: [{
                    name: "Wasteland Sheriff",
                    image: WastelandSheriffSkin,
                    points: "1275",
                }, {
                    name: "Sakura Sheriff",
                    image: SakuraSheriffSkin,
                    points: "1275",
                }],
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
                infoFirst: `The Bulldog is a fully-automatic rifle, and is the cheapest of the three fully automatic rifles in the game. Its magazine holds 24 bullets. It has a good fire rate, and a alternate fire of 3 round bursts. It is a 2 tap to the head and 5 to the body or legs. The Bulldog also has ADS, like other rifles.
                
                The Bulldog is unique for having a relatively low cost compared to the other fully automatic rifles at 2100. This makes it a useful force buy for eco rounds if your team lacks money. However, it costs significantly more than SMGs`,
                infoSecond: `It also has a 3 round burst, unlike other rifles, which can be good for close quarters. However, the spread significantly increases at medium to long ranges, so you'll want to use its primary fire otherwise.
                The ADS is good for supporting an assault on a site or holding a site down, as it increases aim and reduces recoil and spread (Overall makes the weapon more accurate).`,
                points: "2,100",
                skins: [{
                    name: "Horizon Bulldog",
                    image: HorizonBulldogSkin,
                    points: "1275",
                }, {
                    name: "Aristocrat Bulldog",
                    image: AristocratBulldogSkin,
                    points: "1275",
                }],
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
                infoFirst: `The Stinger sits at 1100 credits and is unique for its high fire rate and short range.

                It has an alternate fire mode when aiming down sights, consisting of a four round burst with tighter spread and less recoil. This can be effective at close range to instantly head-burst someone, or at medium range to rapidly finish off a wounded target, however sustained DPS is very low in this fire mode and accuracy is still poor.`,
                infoSecond: `The Stinger is useful for buys when your team does not have sufficient credits for rifles, and cannot afford the Spectre, but still wants to compete at close range with enemies that purchased higher credit guns. The Stinger can only be used effectively at very close ranges, where it's high DPS can be put into use while minimizing the loss of damage caused by the high spread. Considering the low capacity size of 20 shots per magazine, it is still important to make every shot count, especially when facing more than one enemy, as burning through all of its bullets in a few milliseconds is a crippling disadvantage using the Stinger brings. It is also important to learn when to pull down during its intense recoil pattern.`,
                points: "1,100",
                skins: [{
                    name: "Ego Stinger",
                    image: EgoStingerSkin,
                    points: "1775",
                }, {
                    name: "Sovereign Stinger",
                    image: SovereignStingerSkin,
                    points: "1775",
                }],
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
                infoFirst: `The Shorty is the cheapest purchasable weapon in the game. It costs 200 credits and is a semi-automatic, sawed-off double-barreled shotgun.

                This weapon is particularly useful for players who want to save credits. It excels in short-range combat and ambush maneuvers, especially in tight corridors and chokepoints.`,
                infoSecond: `The Shorty, unlike the Judge, is largely ineffective at medium to long ranges due to the significant damage falloff and pellet spread the weapon experiences.

                Due to the Shorty's small clip size, it excels at quick, one-on-one exchanges, but struggles in more sustained firefights against multiple enemies due to the frequent need to reload.`,
                points: "200",
                skins: [{
                    name: "Oni Shorty",
                    image: OniShortySkin,
                    points: "1775",
                }, {
                    name: "Prism II Shorty",
                    image: PrismIIShortySkin,
                    points: "1775",
                }],
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
                infoFirst: `The Operator has the highest damage per bullet out of all the weapons in the game, making it a force to be reckoned with due to its one-hit-kill nature. It is also the most expensive weapon in the game at 5,000 credits.

                The scope has a dual zoom mode: the 5x can focus on holding tight angles, while 2.5x handles better in more open areas.`,
                infoSecond: `The weapon has a notably low fire-rate, creating a large window of vulnerability that allow enemies to easily retaliate. It is also the longest equip time weapon in the game at 1.5 seconds. Auto scope-in after firing a shot can be enabled from the settings menu.`,
                points: "2,700",
                skins: [{
                    name: "Elderflame Operator",
                    image: ElderfralmeOperatorSkin,
                    points: "2475",
                }, {
                    name: "Reaver Operator",
                    image: ReaverOperatorSkin,
                    points: "1775",
                }],
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
                        secondDarkText: "0.75 rounds/sec",
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
                infoFirst: `The Judge is the most expensive shotgun in the game at 1600 credits. It shoots 12 bullets with high falloff like other shotguns. At 10 or fewer meters, 9 bullets are needed to oneshot an armored agent, while all 12 are needed at 10-15 meters if they strike the body. Any bullets that hit the head deal double damage.`,
                infoSecond: `While it does less damage per bullet than the Bucky, it makes up for it with its significantly reduced spread and higher fire rate making the gun much more forgiving. Crouching reduces the spread much more with the Judge than it does with the Bucky.`,
                points: "1,600",
                skins: [{
                    name: "Celestial Judge",
                    image: CelestialJudgeSkin,
                    points: "1775",
                }, {
                    name: "Glitchpop Judge",
                    image: GlitchpopJudgeSkin,
                    points: "2175",
                }],
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
                infoFirst: `The Classic is the pistol that all players receive upon spawning.

                Compared to most other weapons, the Classic does a meager amount of damage. However, its nonexistent price tag makes it effective for rounds in which the player or team wishes to save credits for later rounds.
                
                Due to its low damage output, the Classic requires more shots than most in order to score a kill. Typically, a player with the Classic must hit two or three shots to the head, 7 to the body, or 8 to the legs.`,
                infoSecond: `The Classic has an alternate fire (right-click default). It fires a three-shot burst with moderate spread. Due to this unique mechanic, the Classic is fairly versatile and is viable at both short and medium ranges. This flexibility gives it an edge over other secondary weapons, which typically are only suited for a particular firing range. For example, the Shorty and Frenzy are viable almost exclusively at short ranges, while the Ghost and Sheriff are typically used for mid-range combat.`,
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
                skins: [{
                    name: "Imperium Classic",
                    image: ImperiumClassicSkin,
                    points: "1775",
                }, {
                    name: "Avalanche Classic",
                    image: AvalancheClassicSkin,
                    points: "1275",
                }],
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
                infoFirst: `The Ares can be bought for 1600 credits and is a heavy weapon that, like the Odin, is best used for wallbanging due to its high wall penetration and high magazine size, which is the second highest in the game at 50.

                It costs the same as the Spectre, but while the Spectre specializes at short to medium range fights, the Ares is better at a distance due to its low damage falloff.`,
                infoSecond: `It has an extremely high rate of fire, coupled with a large magazine, Feel free to spray through smokes and walls. Simple spray pattern ⁠— just pull down ⁠— Effective at both short and long range. A nice deal over the Bulldog and Spectre choice for half-buys, anti-ecos, and even eco rounds rounds after v0.50 update.`,
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
                skins: [{
                    name: "Infantry Ares",
                    image: InfantryAresSkin,
                    points: "875",
                }, {
                    name: "Singularity Ares",
                    image: SingularityAresSkin,
                    points: "2175",
                }],
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
                infoFirst: `The Ghost is semi-automatic sidearm pistol. It deals a fairly high amount of damage upon hit, usually taking 2 shots to the head and 5 to 6 shots to the body to kill. The Ghost comes equipped with a silencer, which helps to increase its overall accuracy, and also reduces noise while firing, making it effective as a stealth weapon.`,
                infoSecond: `The Ghost is a reliable backup weapon. Its above-average accuracy, good damage and overall consistency allows you to rely on the pistol during most situations.`,
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
                skins: [{
                    name: "Winter Wonderland Ghost",
                    image: WinterWonderlandGhostSkin,
                    points: "1275",
                }, {
                    name: "Prism Ghost",
                    image: PrismGhostSkin,
                    points: "1275",
                }],
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
                infoFirst: `The Tactical knife is a base melee weapon is provided to every player, and cannot be dropped. It has a two modes of fire: one being a fast slashing motion, and the other being a sharp jab. The primary fire has a three swing combo that loops, while the secondary fire deals more damage in a single strike with a longer recovery. The weapon also deals double damage against the target's back.`,
                infoSecond: `Scoring a kill with this weapon rewards the same number of creds as a regular kill.

                The player runs at 6.6m/s (Might be slightly inaccurate!) with the knife, being second in terms of running speed and is outmatched by the speed of the Golden Gun`,
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
                skins: [{
                    name: "Luxe Knife",
                    image: LuxeKnifeSkin,
                    points: "1750",
                }, {
                    name: "Glitchpop Knife",
                    image: GlitchpopKnifeSkin,
                    points: "4350",
                }],
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
