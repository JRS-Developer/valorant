import { Link} from "react-router-dom";

const SidenavItem = (props) => (
        <li className="sidenav-item">
            <Link className="sidenav-a" to={props.to}>
                {props.name}
            </Link>
        </li>
);

export default SidenavItem;
