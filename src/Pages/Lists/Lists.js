import React, { useDebugValue, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Lists.css";

const Lists = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch("https://secret-diary-app.herokuapp.com/notes")
      .then((res) => res.json())
      .then((data) => setLists(data.reverse()));
  }, []);
  return (
    <div className="page">
      <div className="create">
        <div className="nav">
          <Link to="/">
            <i className="fas fa-chevron-left fa-2x"></i>
          </Link>
          <h1>Secret Diary </h1>
        </div>
        <h2>All Notes </h2>
        <div className="container">
          {lists.map((list) => (
            <div key={list._id} className="note">
              <h4>
                <b>{list?.name}</b>{" "}
              </h4>
              <h5>{list?.date} </h5>
              <hr />
              <h3>{list?.message}</h3>
            </div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default Lists;
