import NewComment from './NewComment';
import ModalPopup from './ModalPopup';
import EditButton from './EditButton';
import { useState } from "react";
import { ReactComponent as PlusIcon } from "../images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../images/icon-minus.svg";
import { ReactComponent as ReplyIcon } from "../images/icon-reply.svg";

const CommentReply = (props) => {
  const [voteCount, setVoteCount] = useState(props.vote);
  const [showReply, setShowReply] = useState(false)

  const incrementCount = () => {
    setVoteCount(voteCount + 1)
  }

  const decrementCount = () => {
    setVoteCount(voteCount - 1)
  }

  const createReply = () => {
    setShowReply(true);
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className="bg-white rounded-xl flex flex-col-reverse p-4 md:flex-row gap-8">
        <div className="flex md:flex-col py-4 px-3 rounded-lg justify-between mb-4" style={{backgroundColor: 'hsl(228, 33%, 97%)'}}>
          <div className="flex justify-center hover:cursor-pointer items-center"><PlusIcon onClick={incrementCount}/></div>
          <h2 style={{color: 'hsl(212, 24%, 26%)'}}>{voteCount ?? props.vote}</h2>
          <div className="flex justify-center hover:cursor-pointer items-center"><MinusIcon onClick={decrementCount}/></div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <img src={props.image} alt={props.imageUsername} className="size-8"/>
              <div className="flex justify-center items-center font-bold" style={{color: 'hsl(212, 24%, 26%)'}}><h3>{props.username}</h3></div>
              {props.isLastReply ? (
                  <div className='flex justify-center items-center text-white font-bold'><h3 style={{backgroundColor: 'hsl(238, 40%, 52%)'}} className='px-1.5 relative right-2 text-xs rounded-sm py-0.5'>you</h3></div>                         // Different icon for the last reply
              ) : null}
              <div className="flex justify-center items-center" style={{color: 'hsl(211, 10%, 45%)'}}><p>{props.createdDate}</p></div>
            </div>

            <div className="flex gap-2 hover:cursor-pointer">
              {/* Conditionally render different icons */}
              {props.isLastReply ? (
                <div className='flex gap-4'>
                  <div><ModalPopup className='flex items-center justify-center'/></div>  
                  <EditButton/>
                </div>  // Different icon for the last reply
              ) : (
                <div className='flex gap-2 hover:cursor-pointer' onClick={createReply}>
                  <div className="flex justify-center items-center"><ReplyIcon /></div>  
                  <div className="flex justify-center items-center font-medium" style={{color: 'hsl(212, 24%, 26%)'}}><p>Reply</p></div>
                </div>              
              )}
            </div>
          </div>

          <p style={{color: 'hsl(211, 10%, 45%)'}}><span style={{color: 'hsl(238, 40%, 52%)'}} className='font-medium'>@{props.replyingTo}</span> {props.comment}</p>
        </div>
      </div>

      {showReply && <NewComment/>}
    </div>
    
  );
};

export default CommentReply


// JSON.stringify()


// {id: 5, content: "aaaaaaaa", createdAt: "2024-09-24T05:14:11.176Z", score: 5,…}