import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComponent from "./AddComponent";

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      setError(null);

      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWViMTkyMzJkN2IxMTAwMTkwZTc3MjAiLCJpYXQiOjE3MTA0Mjc1ODMsImV4cCI6MTcxMTYzNzE4M30.1pct_4dB9ShzICsmqIqq-Qq96QhxoABhdTxRJzWsiAE";
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
          method: "GET",
          headers: headers,
        });
        const fetchedComments = await response.json();
        setComments(fetchedComments);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (bookId) {
      fetchComments();
    }
  }, [bookId]);

  const handleAddComment = async (newComment, bookId) => {
    const url = `https://striveschool-api.herokuapp.com/api/comments/`;
    const options = {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWViMTkyMzJkN2IxMTAwMTkwZTc3MjAiLCJpYXQiOjE3MTA0Mjc1ODMsImV4cCI6MTcxMTYzNzE4M30.1pct_4dB9ShzICsmqIqq-Qq96QhxoABhdTxRJzWsiAE",
      },
    };
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Errore durante l'invio del commento: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Errore durante l'invio del commento:, error");
    }
  };

  return (
    <div className="comment-section">
      {isLoading && <p>Loading comments...</p>}
      {error && <p>Error fetching comments: {error.message}</p>}
      {comments.length > 0 && <CommentList comments={comments} bookID={bookId} />}
      <AddComponent bookId={bookId} onAddComment={handleAddComment} />
    </div>
  );
};

export default CommentArea;
