import { NavLink} from "react-router-dom";

const SidenavItem = (props) => (
        <li className="sidenav-item">
            <NavLink className="sidenav-a" to={props.to}>
                {props.name}
            </NavLink>
        </li>
);

export default SidenavItem;
