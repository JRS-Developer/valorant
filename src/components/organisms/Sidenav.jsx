import SidenavItem from "../atoms/SidenavItem";
import User from "../atoms/User";

const Sidenav = () => (
    <>
        <div className="sidenav" id="sidenav">
            <svg
                onClick={function closeSidenav() {
                    document.getElementById("sidenav").style.width = "0%";
                    document.getElementById("fade").style.width = "0";
                }}
                className="close-button bi bi-x"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
            <ul className="sidenav-list">
                <SidenavItem to="/Game" name="GAME" />
                <SidenavItem to="/Champions" name="CHAMPIONS" />
                <SidenavItem to="/News" name="NEWS" />
                <SidenavItem to="/Patch-Notes" name="PATCH NOTES" />
                <SidenavItem to="/Discover" name="DISCOVER" />
                <SidenavItem to="/Esports" name="ESPORTS" />
                <SidenavItem to="/Universe" name="UNIVERSE" />
                <SidenavItem to="/Shop" name="SHOP" />
                <SidenavItem to="/Support" name="SUPPORT" />
            </ul>
            <ul className="user">
                <User />
            </ul>
        </div>
    </>
);

export default Sidenav;
