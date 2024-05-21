import React from "react";
import hero from "../../assets/hero.png";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-all">
          <h1>SAIDAZIZ SAIDAMINOV</h1>
          <div className="home-center">
            <div className="home-left">
              <h4>Frontend Engineer</h4>
              <button>Get in touch</button>
            </div>
            <img className="home-img" src={hero} alt="" />
            <div className="home-right">
              <h4>Based in Tashkent</h4>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
