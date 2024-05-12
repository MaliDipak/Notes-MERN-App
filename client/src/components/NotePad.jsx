import React, { useEffect, useState } from "react";
import { Note } from "../api/api";
import NoteCard from "./NoteCard";

function NotePad() {
  const [notesCollection, setNotesCollection] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await Note.get();
      setNotesCollection(data.result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const saveHandler = async () => {
    try {
      await Note.save(title, message);
      setMessage("");
      setTitle("");
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="notes">
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="note">
            <p className="title">
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="title"
              />
            </p>
            <p className="message">
              <input
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="message"
              />
            </p>
            <button onClick={saveHandler}>Save</button>
          </div>
          {notesCollection.map((i, index) => (
            <div className="note" key={index}>
              <NoteCard
                title={i.title}
                message={i.message}
                id={i._id}
                setLoading={setLoading}
                setTitle={setTitle}
                setMessage={setMessage}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default NotePad;
