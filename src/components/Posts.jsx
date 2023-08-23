const Posts = ({ data, isLoading }) => {
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="posts">
      {data && data.length > 0 ? (
        data.map((post) => {
          console.log(post);
          return <p key={post._id}>{post.product_name}</p>;
        })
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Posts;
