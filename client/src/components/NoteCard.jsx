import React from "react";
import { Note } from "../api/api";

function NoteCard({ title, message, id, setLoading, setTitle, setMessage }) {
  const deleteHandler = async () => {
    try {
      await Note.delete(id);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  const editHandler = async () => {
    setTitle(title);
    setMessage(message);
    await Note.delete(id);
  };
  return (
    <>
      <p className="title">{title}</p>
      <p className="message">{message}</p>
      <div>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={editHandler}>Edit</button>
      </div>
    </>
  );
}

export default NoteCard;
