import { Link, BrowserRouter as Router } from "react-router-dom";
import user from "../../images/user-icon.png"

const User = () => (
    <Router>
        <img src={user} alt="user icon" />
        <Link to="">UNEPICKED</Link>
    </Router>
);

export default User;
