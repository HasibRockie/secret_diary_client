import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
const Welcome = () => {
  return <div className="page">
      <div className="create">
        <div className="nav">
            <Link to='/'><i className="fas fa-chevron-left fa-2x"></i></Link>
          <h1>Secret Diary </h1>
        </div>
        <div className="welcome">
            <h2>Welcome To <br /> the "Secret Diary" website.</h2>
        </div>
      </div>
      </div>;
};

export default Welcome;
