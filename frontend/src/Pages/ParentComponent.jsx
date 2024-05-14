// ParentComponent.jsx
import React, { useState } from "react";
import Vroom from "./Vroom";

const ParentComponent = () => {
  const [bulbOn, setBulbOn] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [isFanRotating, setIsFanRotating] = useState(false);

  const handleBulbClick = () => {
    setBulbOn(!bulbOn);
  };

  const toggleFanRotation = () => {
    setIsFanRotating(!isFanRotating);
  };

  const handleCurtainClick = () => {
    setCurtainOpen(!curtainOpen);
  };

  return (
    <div>
      <button className="toggle-button" onClick={handleBulbClick}>Toggle Bulb</button>
      <button className="toggle-button" onClick={toggleFanRotation}>Toggle Fan</button>
      <button className="toggle-button" onClick={handleCurtainClick}>Toggle Curtain</button>
      <Vroom
        bulbOn={bulbOn}
        curtainOpen={curtainOpen}
        isFanRotating={isFanRotating}
      />
    </div>
  );
};

export default ParentComponent;


