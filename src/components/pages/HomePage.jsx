import React from "react";
import BannerSection from "../organisms/BannerSection";
import ActionCharacterSection from "../organisms/ActionCharacterSection";
import ActionWeaponSection from "../organisms/ActionWeaponSection";
import Footer from "../organisms/PrincipalFooter";

class HomePage extends React.Component {
    render() {
        return (
            <>
                <main className="main">
                    <BannerSection />
                    <div className="footer"></div>
                    <ActionCharacterSection />
                    <div className="footer"></div>
                    <ActionWeaponSection />
                </main>
                <Footer />
            </>
        );
    }
}

export default HomePage;
