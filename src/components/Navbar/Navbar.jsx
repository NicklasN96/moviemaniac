import "./Navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>

      <div className="navbar_links">
        <DarkMode />
        <a href="#popular">
          Popular{" "}
          <img src={Fire} alt="fire empji" className="navbar_emoji"></img>
        </a>
        <a href="#top_rated">
          Top Rated{" "}
          <img src={Star} alt="star empji" className="navbar_emoji"></img>
        </a>
        <a href="#upcoming">
          Upcoming{" "}
          <img src={Party} alt="party empji" className="navbar_emoji"></img>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
