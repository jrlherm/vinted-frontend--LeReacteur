import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        <h1>S'inscrire</h1>
        <form action="">
          <input type="text" placeholder="Nom d'utilisateur" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
          <div className="enroll-newsletter">
            <input type="checkbox" placeholder="S'inscrire à la newsletter" />
            <label htmlFor="checkbox">S'inscrire à la newsletter</label>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <button>S'inscrire</button>
          <Link to="/signin">Tu as déjà un compte ? Connecte-toi !</Link>
        </form>
      </div>
    </div>
  );
};
export default Signup;
