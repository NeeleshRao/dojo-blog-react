import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    isPending,
    Error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading.....</div>}
      {Error && <div>{Error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default BlogDetails;
