import CommentReply from "./CommentReply";
import { useState } from "react";
import { Textarea } from "../@/components/ui/textarea";
import { Button } from "../@/components/ui/button";
import JuliusOmoAvatar from "../images/avatars/image-juliusomo.png";

const NewComment = (props) => {
  const [textareaValue, setTextareaValue] = useState("");
  const [createdDivs, setCreatedDivs] = useState([]);

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textareaValue);
    if (textareaValue.trim()) {
      setCreatedDivs([...createdDivs, textareaValue]);
      setTextareaValue("");
    }
  };

  // localStorage.setItem('commentReplies', JSON.stringify(props.comment))
  // console.log(JSON.parse(localStorage.getItem('commentReplies')))

  return (
    <div className="flex flex-col gap-6">
      <div className="order-last bg-white rounded-xl p-4 flex justify-between gap-4">
        <img src={JuliusOmoAvatar} alt="JuliusOmoAvatar" className="size-8" />

        <form
          className="flex justify-between w-full gap-4"
          onSubmit={handleSubmit}
        >
          <Textarea
            placeholder="Add a comment..."
            className="h-24 focus:border-black focus:border-2 focus:outline-2"
            value={'hh ' && textareaValue}
            onChange={handleTextareaChange}
          />
          <Button
            className="px-6 py-5 font-medium"
            style={{ backgroundColor: "hsl(238, 40%, 52%)" }}
            type="submit"
          >
            SEND
          </Button>
        </form>
      </div>

      {createdDivs.map((text, index) => (
        <CommentReply
          key={index}
          image={JuliusOmoAvatar}
          imageUsername="juliusomo"
          username="juliusomo"
          comment={text}
          createdDate="Now"
          replyingTo="ll"
          vote={0}
          isLastReply={true}
        />
        // <div key={index} className="p-4 bg-gray-100 rounded-md">
        //   {text}
        // </div>
      ))}
    </div>
  );
};

export default NewComment;
