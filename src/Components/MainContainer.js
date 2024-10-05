import { useState, useEffect } from "react";
import Comment from "./Comment";
import CommentReply from "./CommentReply";
import NewComment from "./NewComment";

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

  const groupCommentsInPairs = (comments) => {
    const pairs = [];
    for (let i = 0; i < comments.length; i += 2) {
      pairs.push(comments.slice(i, i + 2));
    }
    return pairs;
  };

  return (
    <div className="">
      {data &&
        groupCommentsInPairs(data.comments).map((commentPair, index) => (
          <div key={index} className="flex flex-col gap-6">
            <Comment
              key={commentPair[0].id}
              image={commentPair[0].user.image.png}
              imageUsername={commentPair[0].user.username}
              username={commentPair[0].user.username}
              comment={commentPair[0].content}
              createdDate={commentPair[0].createdAt}
              vote={commentPair[0].score}
            />

            {commentPair[1] && (
              <Comment
                key={commentPair[1].id}
                image={commentPair[1].user.image.png}
                imageUsername={commentPair[1].user.username}
                username={commentPair[1].user.username}
                comment={commentPair[1].content}
                createdDate={commentPair[1].createdAt}
                vote={commentPair[1].score}
              />
            )}

            {/* Check if there are replies */}
            {commentPair[1]?.replies && (
              <div
                className="flex flex-col gap-6 ml-0 pl-4 sm:ml-8 sm:pl-8"
                style={{ borderLeft: "0.25rem solid hsl(223, 19%, 93%)" }}
              >
                {commentPair[1].replies.map((reply, index) => {
                  return (
                    <CommentReply
                      key={reply.id}
                      image={reply.user.image.png}
                      imageUsername={reply.user.username}
                      username={reply.user.username}
                      comment={reply.content}
                      createdDate={reply.createdAt}
                      replyingTo={reply.replyingTo}
                      vote={reply.score}
                      isLastReply={
                        index === commentPair[1].replies.length - 1
                      } // Determine if it's the last reply
                    />
                  );
                })}
              </div>
            )}

            <NewComment />
          </div>
        ))}
    </div>
  );
};

export default Maincontainer;
