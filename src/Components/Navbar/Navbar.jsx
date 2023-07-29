import "./Navbar.scss";
import logo from "../../assets/LOGO.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Wrapper">
      <img src={logo} alt="" />
      <div className="nav-right">
        <p>Already have an account?</p>
        <Link to="/sign-up">
          <button className="btn">Sign up</button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
