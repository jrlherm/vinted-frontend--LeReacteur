import { Link } from "react-router-dom";

import vintedLogo from "../assets/img/vinted-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <img src={vintedLogo} alt="Logo Vinted" />
        </Link>
        <div className="header-mid">
          <div className="search">
            <input type="text" placeholder="Rechercher des articles" />
          </div>
        </div>
        <div className="header-right">
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <button>Se connecter</button>
          <button>Vends tes articles</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
