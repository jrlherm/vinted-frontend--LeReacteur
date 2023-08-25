import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import vintedLogo from "../assets/img/vinted-logo.png";
// const refresh = () => window.location.reload(true);

const Header = ({ setUserToken, visible, setVisible }) => {
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
        {Cookies.get("token") ? (
          <div className="header-right">
            <button>Vends tes articles</button>
            <button
              onClick={() => {
                Cookies.remove("token");
                setUserToken(null);
              }}
            >
              Se déconnecter
            </button>
          </div>
        ) : (
          <div className="header-right">
            <button onClick={() => setVisible(true)}>S'inscrire MODAL</button>
            <button onClick={() => setVisible(true)}>Se connecter MODAL</button>
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/signin">
              <button>Se connecter</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
