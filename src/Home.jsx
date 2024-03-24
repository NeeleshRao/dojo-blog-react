import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //   const handleClick = () => {
  //     console.log("Hello, clicked!");
  //   };
  //   const handleClickAgain = (name) => {
  //     console.log(`hello ${name}`);
  //   };
  // const [name, setName] = useState("Neelesh");
  // const [age, setAge] = useState(20);

  // const handleClick = () => {
  //   setName("Sachi");
  //   setAge(18);
  // };

  // const [blogs, setBlogs] = useState(null);
  // const [ispending, setIspending] = useState(true);
  // const [error, setError] = useState(null);

  // const [name, setName] = useState("lalala-initial");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // useEffect(() => {
  //   fetch("http://localhost:8000/blogs")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw Error("Failed to fetch data from the resource!");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setBlogs(data);
  //       setIspending(false);
  //       setError(null);
  //       //console.log(data);
  //     })
  //     .catch((err) => {
  //       setIspending(false);
  //       setError(err.message);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log("Use Effect Ran");
  //   console.log(name);
  // }, [name]);

  const {
    data: blogs,
    isPending,
    Error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <h2>Home Page</h2>
      {/* <button onClick={handleClick}> Click Me</button>
      <button onClick={() => handleClickAgain("Neelesh")}>
        Click here again
      </button> */}
      {/* <button onClick={handleClick}>Click Me</button>
      <p>
        Name is {name} and age is {age}
      </p> */}
      {Error && <div>{Error}</div>}
      {isPending && <div>Loading.........</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          // handleDelete={handleDelete}
        />
      )}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Neel")}
        title="Neelesh Blogs"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName("neel-changed")}>Change Name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
