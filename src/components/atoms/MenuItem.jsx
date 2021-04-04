import {NavLink} from "react-router-dom";

const MenuItem = (props) => (
    <li>
        <NavLink activeStyle={{
            color: "var(--pink-color)",
        }} to={props.to}>
            {props.name}
        </NavLink>
    </li>
);

export default MenuItem;
