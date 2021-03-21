import Header from "../organisms/Header"
import Sidenav from "../organisms/Sidenav"



// const CharacterInfo = () => (

// )

<body>
        {/* MENU PRINCIPAL  */}

        <Header/>

        {/* <!-- SIDENAV --> */}
        <Sidenav/>

        <!-- Contenido principal -->
        <main className="main">
            <section className="personaje">
                <div className="info">
                    <div className="adornos">1</div>
                    <h2 className="info-title">Lore and Storyline</h2>
                    <p className="info-text">
                        Of Korean origin, Jett is an agile fighter who gives
                        priority to movement. Her abilities focus on stealth
                        with jumps that allow her to reach high ledges,
                        teleportation, and smoke bombs. Her ultimate ability
                        gives her kunaïs that inflict moderate to heavy damage,
                        remaining very accurate even when she moves. <br />
                        <br />
                        There are a total of six groups of weapons that players
                        will be able to purchase at the start of each round with
                        each costing a different amount based on their power and
                        weapon type. None of the weapons are tied exclusively to
                        a specific character, so players will be able to use any
                        of the weapons available in the FPS, no matter the
                        character they are using for a particular match.
                    </p>

                    <div className="agent-information">
                        <div>
                            <video
                                id="video"
                                className="agent-video"
                                src="/assets/videos/Jett_C_v001_web.mp4"
                                loop
                                autoplay
                            ></video>
                        </div>
                        <div>
                            <h3 className="agent-title">Agents information</h3>
                            <p className="characteristics">
                                Name : <strong>Jett</strong>
                            </p>
                            <p className="characteristics">
                                Country : <strong>South Korea</strong>
                            </p>
                            <p className="characteristics">
                                Signature Ability : <strong>Tailwind</strong>
                            </p>
                            <p className="characteristics">
                                Abilities : <strong>Cloudburst, Updraft</strong>
                            </p>
                            <p className="characteristics">
                                Ultimate : <strong>Blade Storm</strong>
                            </p>
                        </div>
                    </div>
                    <div className="agent-skills">
                        <div id="cloudburst-container" className="skills">
                            <img
                                className="skills-icon"
                                id="cloudburst"
                                src="/assets/images/R-CLOUDBURST.svg"
                                alt="CLOUDBURST"
                            />
                            <h4 className="skills-title">CLOUDBURST:</h4>
                            <p className="skills-text">
                                Deploys a cloud of smoke that obstructs the
                                enemy's vision. Press the skill button a second
                                time to lift the cloud.
                            </p>
                        </div>
                        <div className="barra"></div>
                        <div id="updraft-container" className="skills">
                            <img
                                className="skills-icon"
                                id="updraft"
                                src="/assets/images/R-UPDRAFT.svg"
                                alt="UPDRAFT"
                            />
                            <h4 className="skills-title">UPDRAFT:</h4>
                            <p className="skills-text">
                                INSTANTLY propel Jett high into the air.
                            </p>
                        </div>
                        <div className="barra"></div>
                        <div id="tailwind-container" className="skills">
                            <img
                                className="skills-icon"
                                id="tailwind"
                                src="/assets/images/R-Tailwind.svg"
                                alt="TAILWIND"
                            />
                            <h4 className="skills-title">TAILWIND:</h4>
                            <p className="skills-text">
                                INSTANTLY propel Jett in the direction she is
                                moving. If Jett is standing still, she will
                                propel forward.
                            </p>
                        </div>
                        <div className="barra"></div>
                        <div id="blade-storm-container" className="skills">
                            <img
                                className="skills-icon"
                                id="blade-storm"
                                src="assets/images/R-BLADE-STORM.svg"
                                alt="BLADE STORM"
                            />
                            <h4 className="skills-title">BLADE STORM:</h4>
                            <p className="skills-text">
                                EQUIP a set of highly accurate knives that
                                recharge on killing an opponent. FIRE to throw a
                                single knife at your target. ALTERNATE FIRE to
                                throw all remaining daggers at your target.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="foto">
                    <img
                        className="foto-jett-text"
                        src="/assets/images/JETT (1).svg"
                        alt="Jett"
                    />
                    <img
                        draggable="false"
                        className="foto-jett"
                        src="./assets/images/Jett_artwork.webp"
                        alt="Jett Name"
                    />
                </div>
            </section>

            <section className="armas-section">
                <div className="armas-container">
                    <div className="armas">
                        <div className="flex">
                            <h3 className="armas-title">RIFLES</h3>
                            <img
                                className="armas-img fix-img"
                                src="./assets/images/weapon_1.svg"
                                alt="GUARDIAN"
                            />
                        </div>
                        <div className="flex">
                            <p className="armas-text"><strong>GUARDIAN</strong></p>
                            <div className="icon">
                                <div>
                                    <img
                                        className="armas-icon"
                                        src="/assets/images/coins.svg"
                                        alt="points icon"
                                    />
                                    <p className="armas-text-coin">
                                        <strong>2,700</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="armas">
                        <div className="flex">
                            <h3 className="armas-title"><strong>SMGS</strong></h3>
                            <a href="./pages/weapons.html">
                            <img
                                className="armas-img"
                                src="./assets/images/weapon_2.svg"
                                alt="SPECTRE"
                            />
                        </a>
                        </div>
                        <div className="flex">
                            <p className="armas-text"><strong>SPECTRE</strong></p>
                            <div className="icon">
                                <div>
                                    <img
                                        className="armas-icon"
                                        src="/assets/images/coins.svg"
                                        alt="points icon"
                                    />
                                    <p className="armas-text-coin">
                                        <strong>1,600</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="armas">
                        <div className="flex">
                            <h3 className="armas-title">SIDEARM</h3>
                            <img
                                className="armas-img"
                                src="/assets/images/weapon_3 1.svg"
                                alt="SHERIFF"
                            />
                        </div>
                        <div className="flex">
                            <p className="armas-text"><strong>SHERIFF</strong></p>
                            <div className="icon">
                                <div>
                                    <img
                                        className="armas-icon"
                                        src="/assets/images/coins.svg"
                                        alt="points icon"
                                    />
                                    <p className="armas-text-coin">
                                        <strong>900</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="fade" id="fade"></div>
        </main>

        <footer className="footer"></footer>
        {/* JavaScript */}
        <script src="assets/scripts/scripts.js"></script>
    </body>

