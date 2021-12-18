import React from "react";
import { Link } from "react-router-dom";
import "./Developer.css";
const Developer = () => {
  return (
    <div className="page">
      <div className="create">
        <div className="nav">
          <Link to="/">
            <i className="fas fa-chevron-left fa-2x"></i>
          </Link>
          <h1>Secret Diary </h1>
        </div>
        <div className="developer about">
          <h2>WHO AM I?</h2>

          <ul>
            <li>
              Name: <span>MD HASIBUL ISLAM</span>{" "}
            </li>
            <li>
              DOB: <span>29 JUNE</span>
            </li>
            <li>
              Blood: <span>O(+ve)</span>
            </li>
            <li>
              Education: <span>BSc in Mechanical Engineering, BUET</span>
            </li>
            <li>
              Email: <span>hasiee8004@gmail.com</span>
            </li>
            <li>
              Facebook:{" "}
              <span>
                <a href="https://www.facebook.com/lnqiseh" target="_blank">Md Hasibul Islam </a>
              </span>
            </li>
            <li>
              Linkedin:{" "}
              <span>
                <a href="https://www.linkedin.com/in/hasib009/" target="_blank">Md Hasibul Islam </a>
              </span>
            </li>
            <li>
              Website:{" "}
              <span>
                <a href="https://md-hasibul-islam.netlify.app/" target="_blank">md-hasibul-islam.netlify.app</a>
              </span>
            </li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
};

export default Developer;
