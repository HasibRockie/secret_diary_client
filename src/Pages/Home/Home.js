import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home page">
      <div className="header"><h1>Secret Diary </h1></div>
      <div className="contents">
        <div className="item"><Link to='/welcome'><i className="fas fa-home fa-3x"></i> <br /> Welcome Page</Link> </div> 
        <div className="item"><Link to='/create'><i className="fas fa-edit fa-3x"></i> <br />Create A note</Link></div>
        <div className="item"><Link to='/notes'><i className="fas fa-eye fa-3x"></i> <br />View All Notes </Link></div>
        <div className="item"><Link to='/about'><i className="fab fa-edge fa-3x"></i> <br />About Website</Link></div>
        <div className="item"><Link to='/developer'><i className="fas fa-code fa-3x"></i> <br />About Developer </Link></div>
      </div>
    </div>
  );
};

export default Home;
