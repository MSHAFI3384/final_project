import React from 'react';
import me from "../images/me.jpg";

const Contact = ({data}) => {
    const pStyle={ color: "gray", fontSize: 20 }

    return(
        <React.Fragment>
            <div className='Home-body'>
                <div class='row' style={{margin:40}}>
                    <div style={{ width: "50%", padding: 100, justifyContent:'center' }}>
                        <h2 style={{ color: "white" }}>Contact</h2>
                        <p style={pStyle} >Phone No: +91 9496363384</p>
                        <p style={pStyle}>Email: muhammedshafi3384@gmail.com</p>
                        <p style={pStyle}>A: Malappuram, India</p>
                        <p style={pStyle}>in: <a href='www.linkedin.com/in/mshafi3384'>linkedin.com/in/mshaﬁ3384</a></p>
                    </div>
                    <img src={me} style={{ height: 500,borderRadius:25 }} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;