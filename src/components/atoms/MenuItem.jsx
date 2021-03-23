import { BrowserRouter as Router, NavLink } from "react-router-dom";

const MenuItem = (props) => (
    <Router>
    <li>
        <NavLink exact={props.exact} to={props.to} >{props.name}</NavLink>
    </li>
    </Router>
);

export default MenuItem;