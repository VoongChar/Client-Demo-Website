import React from "react";
import AboutImg from "./AboutImg";
import AboutContent from "./AboutContent";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <AboutImg />
          </div>
          <div class="col-lg-5">
            <AboutContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
