import logo from "../assets/logo.png";
import "../styles/Banner.css";

function Banner() {
  const title = "La maison de la jungle";
  return (
    <div className="lmj-banner">
      <img src={logo} alt="la maison jungle" className="lmj-logo"></img>
      <h1 className="lmj-title">{title}</h1>
    </div>
  );
}

export default Banner;
