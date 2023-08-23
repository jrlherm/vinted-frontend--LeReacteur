import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="main">
      <h1>Offer Page</h1>
      <Link to={`/`}>
        <p>Naviguer vers la page "/"</p>
      </Link>
    </div>
  );
};

export default Offer;
