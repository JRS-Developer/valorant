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
        {/* <script src="assets/scripts/scripts.js"></script> */}
    </body>

