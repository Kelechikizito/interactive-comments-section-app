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
      {/* Render your data here */}
      {<p>{JSON.stringify(data, null, 2)}</p>}
    </div>
  );
};

export default Comment;
