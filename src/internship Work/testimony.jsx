import React from "react";
import first from "./userTestimony/first.svg";
import second from "./userTestimony/second.svg";
import third from "./userTestimony/third.svg";
import fout from "./userTestimony/four.svg";

function Testimony() {
  return (
    <div style={{ height: "30vh" }}>
      <div className="testimony">
        <span>Testimonies &</span>
        <br />
        <span> Recommendations</span>
      </div>
      <div className="users">
        <img src={first} alt="" />
        <br />
        <span>Hannah</span>
        <br />
        <span>
          Seyi gets things done. He’s very passionate about what he does and
          he’s always fun to be with.
        </span>
      </div>
      <div className="users2">
        <img src={first} alt="" />
        <br />
        <span>Hannah</span>
        <br />
        <span>
          Seyi gets things done. He’s very passionate about what he does and
          he’s always fun to be with.
        </span>
      </div>
      <div className="users3">
        <img src={second} alt="" />
        <br />
        <span>Hannah</span>
        <br />
        <span>
          Seyi gets things done. He’s very passionate about what he does and
          he’s always fun to be with.
        </span>
      </div>
      <div className="users4">
        <img src={third} alt="" />
        <br />
        <span>Hannah</span>
        <br />
        <span>
          Seyi gets things done. He’s very passionate about what he does and
          he’s always fun to be with.
        </span>
      </div>
    </div>
  );
}

export default Testimony;
