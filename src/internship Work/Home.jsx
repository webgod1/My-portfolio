import React from "react";
import { Link } from "react-router-dom";
import images from "../internship Work/img/image";
import { motion } from "framer-motion";
import firstImage from "./img/linkin.png";
import secondimage from "./img/twitter.png";
import myPic from "./img/mypic.JPG";
import Skills from "./skills";
import Workspace from "./workspace";
import Testimony from "./testimony";
import Contact from "./contact";

function Home() {
  return (
    <React.Fragment>
      <div className="main-main">
        <header>
          <h2>Samuel Godwin</h2>
          <nav>
            {/* <Link to="/"> */}
            <motion.li
              whileTap={{
                color: "red",
              }}
            >
              About me
            </motion.li>
            {/* </Link> */}
            {/* <Link to="/"> */}
            <motion.li
              whileTap={{
                color: "red",
              }}
            >
              Services
            </motion.li>
            {/* </Link> */}
            {/* <Link to="/"> */}
            <motion.li
              whileTap={{
                color: "red",
              }}
            >
              Projects
            </motion.li>
            {/* </Link> */}
            {/* <Link to="/"> */}
            <motion.li
              whileTap={{
                color: "red",
              }}
            >
              Contact me
            </motion.li>
            {/* </Link> */}
          </nav>
        </header>
        <motion.div
          className="body"
          style={{
            marginTop: "80px",
          }}
          animate={{
            x: 120,
          }}
        >
          <p style={{ color: "#2351DC" }}>Hi there</p>
          <p style={{ color: "#2351DC", fontWeight: "bold" }}>
            Am Godwin Samuel
          </p>
          <h2 style={{ fontSize: "2em" }}>Am a front-end developer</h2>
          <motion.button
            style={{
              color: "white",
              background: "blue",
              width: "200px",
              height: "6vh",
              borderRadius: "20px",
              border: "blue",
              cursor: "pointer",
            }}
            whileHover={{
              background: "white",
              border: "",
              color: "blue",
            }}
          >
            Check out my projects
          </motion.button>
          <br />
          <img className="firstLogo" src={firstImage} alt="" />
          <img className="secondLogo" src={secondimage} alt="" />
        </motion.div>
        <div>
          <img src={myPic} className="myPic" alt="" />
        </div>
        <div className="about">
          <p style={{ color: "black", fontSize: " 1.5em", fontWeight: "bold" }}>
            About Me
          </p>
          <span>
            Godwin Samuel is a passionate and goal driven Techpreneur whose
          </span>
          <br />
          <span>
            interest is in using technology to build solutions to solve real
            world problems.
          </span>
          <br />
          <img src={firstImage} alt="" />
          <img
            style={{
              position: "absolute",
              marginTop: "13px",
              marginLeft: "10px",
            }}
            src={secondimage}
            alt=""
            className="secondimage"
          />
        </div>
        <br />
        <br />
        {/* <br />
      <br />
      <br />
      <br /> */}
        <Skills />
        <Workspace />
        <Testimony />
        <br />
        <br />
        <br />

        <Contact />
      </div>
      <div
        className="msg"
        style={{ textAlign: "center", marginTop: "250px", marginLeft: "50px" }}
      >
        <h2>Sorry For desktop Views only</h2>
        <p>Use your Computer to check it out</p>
      </div>
    </React.Fragment>
  );
}

export default Home;
