import "./PersonalInfo.css";
import logo from "./logo.png";
import Separator from "../Separator/Separator";

export default function PersonalInfo() {
  return (
    <div className="summary">
      <div className="propic-card">
        <img src={logo} alt="profile" className="propic" />
      </div>
      <p className="name">Patrick HM Tse</p>
      <div className="title">Software Engineer</div>
      <Separator />
      <div className="info">
        <span>
          <img src={logo} alt="email" className="icon" />
          <p className="content">Email</p>
        </span>
        <span>
          <img src={logo} alt="phone" className="icon" />
          <p className="content">Phone</p>
        </span>
        <span>
          <img src={logo} alt="location" className="icon" />
          <p className="content">Locaiton</p>
        </span>
      </div>
    </div>
  );
}
