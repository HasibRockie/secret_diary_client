import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const date = new Date().toLocaleDateString();
  const [successful, setSuccessful] = useState(false);
  const [failed, setFailed] = useState(false);
  const object = { name, message, date };
  const handleAdd = (e) => {
    e.preventDefault();
    fetch("https://secret-diary-app.herokuapp.com/notes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((res) => {
        setSuccessful(true);
        setFailed(false);
      })
      .catch((err) => {
        setFailed(true);
        setSuccessful(false);
      });
    e.target.reset();
  };
  return (
    <div className="page">
      <div className="create">
        <div className="nav">
          <Link to="/">
            <i className="fas fa-chevron-left fa-2x"></i>
          </Link>
          <h1>Secret Diary </h1>
        </div>
        <div className="content">
          <h2>Create Your Note </h2>
          <form method="post" onSubmit={handleAdd} className="note-create">
            <input
              onChange={(e) => setName(e.target.value)}
              className="input"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />{" "}
            <br /> <br />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="input"
              name="notes"
              id=""
              cols="30"
              rows="10"
              placeholder="Type Your Note Here..."
              required
            ></textarea>{" "}
            <br /> <br /> <br />
            <button className="input" type="submit">
              Add Note
            </button>
          </form>
          <br />
          <br />
          <br />
          {successful && <div className="success"><h2><i className="fas fa-check-circle "></i>SUCCESSFULLY ADDED</h2></div>}
          {failed && (
            <div className="failed"><h2><i className="fas fa-times"></i>FAILED TO ADD. PLEASE,TRY AGAIN. </h2></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Create;
