import React from "react";
import { motion } from "framer-motion";
import javascript from "./img/javascript.png";
import ReactImage from "../internship Work/img/react.png";
import Css from "../internship Work/img/css.jfif";
import Boot from "../internship Work/img/boot.jfif";
import html from "./img/html5.png";

function Skills() {
  return (
    <div style={{ textAlign: "center" }}>
      <motion.div
        className="skills"
        animate={{
          opacity: 1,
          x: 100,
        }}
      >
        <span
          style={{
            color: "black",
            textAlign: "center",
            fontSize: "2em",
            fontWeight: "bold",
          }}
        >
          My Skill
        </span>
        <br />
        <span>Here are a few skills i possess</span>
        <br />
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <img className="images" src={html} alt="" />
          <div className="parent">
            <div className="child"></div>
          </div>
        </div>
        <img className="images" id="js" src={javascript} alt="" />
        <div className="parent2">
          <div className="child2"></div>
        </div>

        <img className="images" id="js2" src={Boot} alt="" />
        <div className="parent5">
          <div className="child5"></div>
        </div>

        <img className="images" id="js3" src={Css} alt="" />
        <div className="parent3">
          <div className="child3"></div>
        </div>
        <img className="images" id="js4" src={ReactImage} alt="" />
        <div className="parent4">
          <div className="child4"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
