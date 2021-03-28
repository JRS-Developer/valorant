import {NavLink} from "react-router-dom";

const MenuItem = (props) => (
    <li>
        <NavLink to={props.to}>
            {props.name}
        </NavLink>
    </li>
);

export default MenuItem;
