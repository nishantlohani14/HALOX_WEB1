import React from "react";

const Vroom = ({ bulbOn, curtainOpen, isFanRotating, background }) => {
  return (
    <div className="room" style={{ backgroundImage: `url(${background})` }}>
      <div className="device">
        <img src={bulbOn ? "bulb-on.png" : "bulb-off.png"} alt="Bulb" />
      </div>

      <div className="device">
        <svg
          id="fan"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          className={isFanRotating ? "rotate" : ""}
        >
          {/* SVG Paths */}
        </svg>
      </div>

      <div className="device">
        <img
          src={curtainOpen ? "curtain-open.png" : "curtain-off.png"}
          alt="Curtain"
        />
      </div>
    </div>
  );
};

export default Vroom;








