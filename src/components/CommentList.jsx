import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <ul className="comment-list">
      {comments.map((comment, index) => (
        <li key={index}>
          <p>
            {comment.comment} ({comment.rate})
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
