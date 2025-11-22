import React from "react";
import Pic from "./pic.jpg"; // updated image import

const Intro = () => {
  return (
    <section className="intro">
      <h1>Faizan Ahmed</h1>
      <p>Email: F2023266527@gmail.com</p>
      <p>Phone: 12345678</p>
      <img
        src={Pic}
        alt="Faizan Ahmed"
        style={{
          width: "80px",
          borderRadius: "10%",
          marginTop: "px",
        }}
      />
    </section>
  );
};

export default Intro;
