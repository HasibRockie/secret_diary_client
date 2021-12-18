import React from "react";
import { Link } from "react-router-dom";
import "./Website.css";
const Website = () => {
  return <div className="page">
      <div className="create">
        <div className="nav">
            <Link to='/'><i className="fas fa-chevron-left fa-2x"></i></Link>
          <h1>Secret Diary </h1>
        </div>
        <div className="about">
            <h1>About Website</h1>
            <h4>Technology used:</h4>
            <ul>
                <li>React JS</li>
                <li>MongoDB Atlas</li>
                <li>Vanilla CSS</li>
                <li>Heroku Server</li>
            </ul>
        </div>
        
      </div>{" "}
      </div>;
};

export default Website;
