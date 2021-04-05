import Logo from "../atoms/Logo";
import UnEpic from "../../images/Logos/UnEpicKid.webp";
import Dribbble from "../../images/Logos/dribble.svg";
import Facebook from "../../images/Logos/facebook.svg";
import Instagram from "../../images/Logos/Instagram.svg";
const PrincipalFooter = () => (
    <footer className="principal-footer">
        <div className="disclaimer footer-container">
            <h5 className="footer-title">DISCLAIMER</h5>
            <p className="footer-text">
                This page has been made with the objective of practice, the art
                and images are from the official page of Valorant and the stats
                of characters and weapons are from Valorant forums.
            </p>
            <div className="disclaimer--logos">
                <a
                    href="https://playvalorant.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Logo link="Valorant" name="Valorant" />
                </a>
                <a
                    href="https://www.riotgames.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Logo link="RiotGames" name="Riot Games" />
                </a>
            </div>
        </div>
        <div className="thank footer-container">
            <h5 className="footer-title">THANK YOU TO:</h5>
            <p className="footer-text">
                Thank you to Dmitry for the conceptual design of this page. You
                can visit him clicking in his photo
            </p>
            <div className="thank--social">
                <a
                    href="https://dribbble.com/UnEpicKid"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="thank--social--img"
                        src={UnEpic}
                        alt="Dmitry Kiiashko"
                    />
                </a>

                <span>Dmitry Kiiashko</span>
                <a
                    href="https://dribbble.com/UnEpicKid"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="dribbble thank--social--img"
                        src={Dribbble}
                        alt="dribbble"
                    />
                </a>
            </div>
        </div>
        <div className="contact footer-container">
            <h5 className="footer-title">CONTACT ME:</h5>
            <p className="footer-text">
                You can contact me in my social medias:
            </p>
            <div className="contact-container">
                <div className="contact--social">
                    <a
                        href="https://www.facebook.com/joseSF8/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Facebook} alt="Facebook" />
                    </a>
                </div>
                <div className="contact--social">
                    <a
                        href="https://www.instagram.com/jose_szz/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default PrincipalFooter;
