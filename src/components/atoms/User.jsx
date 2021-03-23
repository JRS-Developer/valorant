import { Link } from "react-router-dom";
import user from "../../images/user-icon.png";

const User = () => (
    <>
        <img src={user} alt="user icon" />
        <Link to="">UNEPICKED</Link>
    </>
);

export default User;
