import React, { useState } from "react";

const AddComment = ({ bookId, onAddComment }) => {
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(null);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCommentText = newComment.trim();
    if (!newCommentText) {
      return;
    }

    const commentObject = {
      comment: newCommentText,
      rate: rating,
      elementId: bookId,
    };

    onAddComment(commentObject);
    setNewComment("");
    setRating(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newComment">Aggiungi un commento:</label>
      <textarea id="newComment" value={newComment} onChange={handleChange} rows="5" />
      <label htmlFor="rating">Valutazione (1-5):</label>
      <select id="rating" value="" onChange={handleRatingChange}>
        <option value="">Seleziona valutazione</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Invia</button>
    </form>
  );
};

export default AddComment;
