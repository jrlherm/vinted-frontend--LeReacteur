const Posts = ({ data, isLoading }) => {
  return isLoading ? (
    <p>Chargement en cours ...</p>
  ) : (
    <div className="posts">
      {data.map((post) => {
        console.log(post);
        return <p key={post._id}>{post.product_name}</p>;
      })}
    </div>
  );
};

export default Posts;
