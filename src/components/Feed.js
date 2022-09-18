import React from "react";
import Posts from "./Posts";

const Feed = (props) => {
  return (
    <React.Fragment>
      <main>
        <section>
          <Posts />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Feed;
