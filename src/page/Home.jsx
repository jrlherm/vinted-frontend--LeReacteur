import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Posts from "../components/Posts";

const Home = ({ data, isLoading }) => {
  return (
    <div className="main">
      <Hero />
      <Posts data={data} isLoading={isLoading} />
      <Link to={`/offer/1234`}>
        Naviguer vers la page offer/:id avec comme id 1234
      </Link>
    </div>
  );
};

export default Home;
