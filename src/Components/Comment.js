import "./Comment.css";
import { useState, useEffect } from "react";

const Comment = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // If you're using Create React App and the file is in the public folder
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, []);

  return (
    <div>
      <h2>Current User: {data?.currentUser?.username}</h2>{" "}
      {/* Use optional chaining */}
      <img
        src={data?.currentUser?.image?.png}
        alt={data?.currentUser?.username}
      />
      {/* Render comments */}
      {data?.comments?.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.user.username}</h3>
          <p>{comment.content}</p>

          {/* Render replies */}
          {comment.replies?.map((reply) => <p>{reply.content}</p>) || "Unknown"}

          <p>Score: {comment.score}</p>
          <img src={comment.user.image.png} alt={comment.user.username} />
        </div>
      ))}
    </div>
  );
};

export default Comment;
