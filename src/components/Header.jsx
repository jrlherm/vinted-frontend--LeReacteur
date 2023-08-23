import vintedLogo from "../assets/img/vinted-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img src={vintedLogo} alt="Logo Vinted" />
        <div className="header-mid">
          <div className="search">
            <input type="text" placeholder="Rechercher des articles" />
          </div>
        </div>
        <div className="header-right">
          <button>S'inscrire</button>
          <button>Se connecter</button>
          <button>Vends tes articles</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
