import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Posts = ({ data, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <div className="posts">
      <div className="container">
        {data?.offers?.map((post) => {
          return (
            <Link to={`/offer/${post._id}`} key={post._id}>
              <div className="post">
                <p>{post.owner.account.username}</p>
                <img src={post.product_image.url} alt="" />
                <p>{post.product_name}</p>
                <p>{post.product_price} €</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
