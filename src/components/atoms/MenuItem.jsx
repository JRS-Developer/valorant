import { Link, BrowserRouter as Router } from "react-router-dom";

const MenuItem = (props) => (
    <Router>
    <li>
        <Link to={props.to}>{props.name}</Link>
    </li>
    </Router>
);

export default MenuItem;