import React, { useEffect, useRef, useState } from "react";
import images from "./myWor images/theimage";
import { motion } from "framer-motion";

function Workspace() {
  const [slider, setSlider] = useState(0);
  const slide = useRef(null);
  useEffect(() => {
    setSlider(slide.current.scrollWidth - slide.current.offsetWidth);
  });
  return (
    <div style={{ textAlign: "center", marginLeft: "90px", height: "120vh" }}>
      <h2 style={{ marginLeft: "300px" }}>Milestones of Projects</h2>
      <p style={{ marginLeft: "300px" }}>
        Here are a few people & projects i’ve patnered and worked on.
      </p>
      <div
        style={{
          width: "80%",
          marginLeft: "200px",
          overflow: "hidden",
          background: "rgb(226, 217, 217)",
          height: "65vh",
          borderRadius: "20px",
        }}
        className="theParent"
      >
        <motion.div
          style={{
            display: "flex",
            width: "70%",
            background: "rgb(226, 217, 217)",
            cursor: "grab",
          }}
          className="theChildren"
          drag="x"
          dragConstraints={{ right: 0, left: -slider }}
          ref={slide}
          whileTap={{
            cursor: "grabbing",
          }}
        >
          {images.map((sliderImage) => {
            return (
              <div
                style={{
                  padding: "20px",
                }}
              >
                <img
                  style={{ width: "250px", borderRadius: "20px" }}
                  src={sliderImage}
                />
                <br />
                <button
                  style={{
                    background: "blue",
                    width: "220px",
                    border: "none",
                    height: "6vh",
                    marginTop: "20px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "1.3em",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Check out
                </button>
              </div>
            );
          })}
        </motion.div>
      </div>
      <h2 style={{ marginLeft: "300px" }}>Or</h2>
      <h1 style={{ marginLeft: "300px" }}>
        Check Out My Github To See More Projects
      </h1>
      <a href="https://github/webgod1">
        <button
          style={{
            marginLeft: "300px",
            background: "blue",
            color: "white",
            width: "280px",
            height: "10vh",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            fontSize: "1.3em",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Go
        </button>
      </a>
    </div>
  );
}

export default Workspace;
