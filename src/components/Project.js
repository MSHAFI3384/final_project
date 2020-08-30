import React from "react";

const Project = () => {
  const hStyle = {
    color: "purple",
  };

  const pStyle = {
    color: "white",
    fontSize: 25,
  };

  const selfDivStyle = {
    width: "40%",
    margin: 50,
  };

  return (
    <React.Fragment>
      <div className="resume-body">
        <div style={selfDivStyle}>
          <h2 style={hStyle}>GROCERY NOTES (06/2020)</h2>
          <p style={pStyle}>
            It is a simple mobile app of grocery notes written using Java
            Script, JSX and React Native with the help of Expo application. DBMS
            is also used for storing data locally.
          </p>
        </div>

        <div style={selfDivStyle}>
          <h2 style={hStyle}>MOBILE CONTROLLED ROBOTIC CAR (12/2019) </h2>
          <p style={pStyle}>
            Controlling the robotic car using an app created in android studio
            via a bluetooth module connected to car using an arduino
          </p>
        </div>

        <div style={selfDivStyle}>
          <h2 style={hStyle}>AUTOMATIC TOKEN GENERATOR (08/2018)</h2>
          <p style={pStyle}>
          A small circuit made using breadboard and light dependent resistor(LDR)
           to precisely count with the help of switch. 
          </p>
        </div>

        <div style={selfDivStyle}>
          <h2 style={hStyle}>TOLL PLAZA SYSTEM (04/2018) </h2>
          <p style={pStyle}>
            It counts the no of vehicles passing through the toll and will print
            the total money collected from the toll. It was written in C++.
          </p>
        </div>

        <div style={selfDivStyle}>
          <h2 style={hStyle}>MEDICINE MANAGEMENT RECORD SYSTEM (11/2017)</h2>
          <p style={pStyle}>
          The objective was to create a small program as in
           the software used in pharmacy. It was written in C.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
