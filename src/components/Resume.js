import React from "react";

const Resume = () => {
  const mainStyle = {
    margin: 30,
  };

  const subStyle = {
    margin: 10,
    color: "gray",
  };

  const hStyle = {
    color: "pink",
  };

  return (
    <React.Fragment>
      <div className="resume-body">
        <div style={mainStyle}>
          <h2 style={hStyle}>Education</h2>
          <div style={subStyle}>
            <h5>B.Tech(Computer Science Engineering) </h5>
            <h7>
              Lovely Professional University(Phagwara) | 2017 - 2021 CGPA 7.1{" "}
            </h7>
          </div>

          <div style={subStyle}>
            <h5>XII(CBSE)</h5>
            <h7>Sacred Heart S.S School(Malappuram) | 2016 CGPA 8.7 </h7>
          </div>

          <div style={subStyle}>
            <h5>X(CBSE)</h5>
            <h7>Ma'din Public School (Malappuram) | 2014 CGPA 9.4 </h7>
          </div>
        </div>

        <div style={mainStyle}>
          <h2 style={hStyle}>Certificates</h2>
          <div style={subStyle}>
            <h5>Machine Learning with Python (07/2019) </h5>
            <h7>Certiﬁcation from IBM </h7>
          </div>

          <div style={subStyle}>
            <h5>Image Processing & Computer Vision (02/2019) </h5>
            <h7>Microsoft </h7>
          </div>

          <div style={subStyle}>
            <h5>Ethical Hacking: Begginer to Advanced (10/2018) </h5>
            <h7>Udemy </h7>
          </div>
        </div>

        <div style={mainStyle}>
            <h2 style={hStyle}>Skills</h2>
            <div style={subStyle}>
                <h5>Python</h5>
            </div>

            <div style={subStyle}>
                <h5>DBMS</h5>
            </div>

            <div style={subStyle}>
                <h5>React Native</h5>
            </div>

            <div style={subStyle}>
                <h5>React</h5>
            </div>

            <div style={subStyle}>
                <h5>Java</h5>
            </div>
        </div>

        <div style={mainStyle}>
          <h2 style={hStyle}>Languages</h2>
          <div style={subStyle}>
            <h5>English</h5>
            <h7>Full Professional Proﬁciency </h7>
          </div>

          <div style={subStyle}>
            <h5>Malayalam</h5>
            <h7>Native or Bilingual Proﬁciency  </h7>
          </div>

          <div style={subStyle}>
            <h5>Hindi</h5>
            <h7>Professional Working Proﬁciency  </h7>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
