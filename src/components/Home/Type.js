import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DS & Algorithms",
          "Problem Solver",
          "Competitive Programmer",
          "Frontend Developer",
          "Finance Enthusiast",
          // "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
