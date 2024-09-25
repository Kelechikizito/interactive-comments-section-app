import "./Comment.css";

const Comment = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.imageUsername} />
      <h3>{props.username}</h3>
      <p>{props.comment}</p>
    </div>
  );
};

export default Comment;
