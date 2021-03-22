import { Link, BrowserRouter as Router } from "react-router-dom";

const SidenavItem = (props) => (
    <Router>
        <li className="sidenav-item">
            <Link className="sidenav-a" to={props.to}>
                {props.name}
            </Link>
        </li>
    </Router>
);

export default SidenavItem;