import "./navbar2.scss";
import Alert from "../../assets/Alert.png";
import Profile from "../../assets/Profile-Picture.png";
import chevron from "../../assets/chevron-down.png";

const Navbar2 = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="head-section">
          <h1 className="header">Verifiers</h1>
          <p>11</p>
        </div>

        <div className="items">
          <div className="item">
            <img src={Alert} alt="Alert" className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img
              src={Profile}
              width="54px"
              height="44px"
              alt="Profile picture"
              className="icon-img"
            />
            <div className="item">
              <img src={chevron} alt="arrowdown" className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
