import {NavLink } from "react-router-dom";

const MenuItem = (props) => (
    <li>
        <NavLink exact={props.exact} to={props.to} >{props.name}</NavLink>
    </li>
);

export default MenuItem;