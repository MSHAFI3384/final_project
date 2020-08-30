import React, { Component } from "react";
import me from "../images/me.jpg";

const Home = ({ data }) => {

  return (
    <React.Fragment>
      <div className="Home-body">
        <div class="row" style={{margin:40}}>
          <div style={{ width: "50%", padding: 100, justifyContent:'center' }}>
            <h1 style={{ color: "white" }}>{data}</h1>
            <p style={{ color: "gray", fontSize: 20 }}>
              I am a react native programmer seeking a position in the field of
              Mobile App development and Web App development, where I can apply
              my knowledge and skills for continuous improvement.
            </p>
          </div>
          <img src={me} style={{ height: 500,borderRadius:25 }} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
