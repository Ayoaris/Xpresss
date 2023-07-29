import "./sidebar.scss";
import logo from "../../assets/LOGO.png";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineTags } from "react-icons/ai";
import { IoCashOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    // window.location.reload();
    navigate("/");
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="divide"></div>
      <div className="center">
        <ul>
          <li>
            <IoPeopleOutline className="icon" />
            <span>Verifiers</span>
          </li>
          <li>
            <AiOutlineTags className="icon" />
            <span>Deals</span>
          </li>
          <li>
            <IoCashOutline
              className="
              icon"
            />
            <span>Transactions</span>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn logout" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
