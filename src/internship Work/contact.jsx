import React from "react";
import link from "../internship Work/img/linkin.png";
import twitter from "../internship Work/img/twitter.png";
import mail from "../internship Work/img/mail.png";
import phone from "../internship Work/img/phone.png";

function Contact() {
  return (
    <React.Fragment>
      <div className="contacts">
        <div>
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
            sollicitudin tellus. Phasellus ac nisi augue.
          </p>
          <a href="#">
            <img style={{ marginLeft: "-2px" }} src={link} alt="" />
          </a>
          <a href="#">
            <img className="img" src={twitter} alt="" />
          </a>
        </div>
        <div>
          <img className="im" src={mail} alt="" />
          <span className="text">godwinsamue0@gmail.com</span>
          <br />
          <span
            style={{
              fontSize: "10px",
              position: "absolute",
              marginTop: "-5px",
              marginLeft: "32px",
            }}
          >
            Send a message Anytime!
          </span>
        </div>
        <br />
        <div>
          <img className="im" src={phone} alt="" />
          <span className="text">+2349081008646</span>
          <br />
          <span
            style={{
              fontSize: "10px",
              position: "absolute",
              marginTop: "-5px",
              marginLeft: "32px",
            }}
          >
            Send a message Anytime!
          </span>
        </div>
        <br />
        <div
          style={{
            width: "1346px",
            marginLeft: "-200px",
            height: "20vh",
            background: "black",
            color: "white",
          }}
        >
          <footer
            style={{
              position: "absolute",
              marginLeft: "150px",
              marginTop: "50px",
            }}
          >
            <hr style={{ width: "300px", marginLeft: "160px" }} />
            <span
              style={{
                position: "absolute",
                marginTop: "-30px",
                textAlign: "center",
                left: "470px",
                fontSize: "1.6em",
              }}
            >
              Godwin
            </span>
            <hr
              style={{
                position: "absolute",
                width: "300px",
                marginLeft: "570px",
                marginTop: "-10px",
              }}
            />
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
