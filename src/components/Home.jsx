import React from "react";
import AboutContent from './AboutContent'
import icon from './Artwork/icon.png'

function Home() {
  return (
    <div className="home">
      <div className="container row p-0 mx-5">
        <div className="container col-6 m-0 my-5">
        <img
            className="img-fluid"
            src={icon}
            alt="self-portait of JadeKingfisher"
            />
          <AboutContent />
        </div>
        <div className="container col-6 m-0 mt-">
          This is News
        </div>
      </div>
      <div className="container mx-5">
        Latest content will go here
      </div>
    </div>
  );
}

export default Home;
