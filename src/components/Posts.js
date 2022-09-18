import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "001",
    username: "observe.ai",
    userImg: "build",
    img: "build",
    caption:
      "yes you can do this, believe in yourself , have faith in yourself, understood !",
    location: "USA",
  },
  {
    id: "002",
    username: "observe.ai",
    userImg: "build",
    img: "team",
    caption: "yes you can do this",
    location: "Brazil",
  },
  {
    id: "003",
    username: "observe.ai",
    userImg: "build",
    img: "coding",
    caption: "You did it",
    location: "India",
  },
];
const Posts = (props) => {
  return (
    <React.Fragment>
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            imgPost={post.img}
            caption={post.caption}
            location={post.location}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Posts;
