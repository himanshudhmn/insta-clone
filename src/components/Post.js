import React, { useEffect, useState } from "react";
import "./Post.css";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiShareCircleLine } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { GrBookmark, GrClosedCaption } from "react-icons/gr";
import ReactTimeAgo from "react-time-ago";

import { IconContext } from "react-icons";
const Post = (props) => {
  const [comment, setComment] = useState({ id: "", comm: "", time: "" });
  const [commentArr, setCommentArr] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(10);

  const handleLikeCount = (e) => {
    e.preventDefault();
    setHasLiked(!hasLiked);
    {
      hasLiked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    }
  };
  const sendComment = (e) => {
    e.preventDefault();
    let commentToSend = comment;
    setCommentArr((prev) => {
      return [...prev, commentToSend];
    });
    setComment({ comm: "", time: "" });
    console.log(commentArr);
  };
  return (
    <React.Fragment>
      <div className="post">
        {/* Header */}
        <div className="header">
          <img
            src={require(`../IMG/${props.userImg}.jpg`)}
            className="userimg"
          />
          <div className="user-location">
            <p className="username">{props.username}</p>
            <p className="location">{props.location}</p>
          </div>
          <div className="dots">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        {/* IMAGE */}
        <div className="post-img">
          <img
            src={require(`../IMG/${props.imgPost}.jpg`)}
            className="img-cover"
          />
        </div>

        {/* BUTTONS */}
        <div className="buttons-icon">
          <IconContext.Provider value={{ style: { fontSize: "1.8rem" } }}>
            <div className="lcs">
              <button className="icon ilike" onClick={handleLikeCount}>
                {hasLiked ? <FaHeart className="heart" /> : <FiHeart />}
              </button>
              <div className="icon icomment">
                <IoChatbubbleOutline />
              </div>
              <div className="icon ishare">
                <RiShareCircleLine />
              </div>
            </div>
            <div className="icon isave">
              <GrBookmark />
            </div>
          </IconContext.Provider>
        </div>

        {/* LIKES */}
        <div>
          {/* <p>{likeCount > 0 ? `${likeCount} Likes` : ""}</p> */}
          <p className="like">{likeCount} Likes</p>
        </div>

        {/* CAPTION */}
        <p className="caption">
          <span className="username">{props.username}</span> {props.caption}
        </p>
        {/* COMMENTS */}
        {commentArr.length > 0 && (
          <div className="cbox">
            {commentArr.map((comment) => (
              <div key={comment.id} className="comments">
                <div>
                  <p className="comment">
                    <span className="username">himanshu</span> {comment.comm}
                  </p>
                </div>
                <div>
                  <p className="time">{comment.time}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* INPUTBOX */}
        <form className="commentbox">
          <div className="usericon">
            <HiUserCircle />
          </div>
          <input
            type="text"
            value={comment.comm}
            onChange={(e) =>
              setComment({
                id: Math.random(),
                comm: e.target.value,
                time: <ReactTimeAgo date={Date.now()} locale="en-US" />,
              })
            }
            className="box"
            placeholder="Add a comment..."
          />
          <button
            type="submit"
            disabled={!comment.comm.trim()}
            onClick={sendComment}
            className="btn"
          >
            Post
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Post;
