import { useState, useEffect } from "react";
import "./MainContainer.css";
import Comment from "./Comment";

const Maincontainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
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

  // Helper function to group comments in pairs
  const groupCommentsInPairs = (comments) => {
    const pairs = [];
    for (let i = 0; i < comments.length; i += 2) {
      pairs.push(comments.slice(i, i + 2)); // Grouping two comments at a time
    }
    return pairs;
  };

  return (
    <div className="flex w-3/4 justify-center items-center">
      {/* Check if data is available */}
      {data &&
        groupCommentsInPairs(data.comments).map((commentPair, index) => (
          <div key={index}>
            {/* Render the first comment in the pair */}
            <Comment
              key={commentPair[0].id}
              image={commentPair[0].user.image.png}
              imageUsername={commentPair[0].user.username}
              username={commentPair[0].user.username}
              comment={commentPair[0].content}
            />

            {/* Render the second comment in the pair, if it exists */}
            {commentPair[1] && (
              <Comment
                key={commentPair[1].id}
                image={commentPair[1].user.image.png}
                imageUsername={commentPair[1].user.username}
                username={commentPair[1].user.username}
                comment={commentPair[1].content}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default Maincontainer;


// {/* Render replies */}
// {comment.replies?.map((reply) => <p>{reply.content}</p>) || "Unknown"}

// <p>Score: {comment.score}</p>
// <img src={comment.user.image.png} alt={comment.user.username} />
