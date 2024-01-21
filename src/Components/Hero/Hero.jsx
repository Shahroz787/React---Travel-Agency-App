import React from "react";
import { HeroContainer } from "./HeroElements";
import heroImage from "../../Assets/heroImage.jpg";

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <div className="hero__Banner">
        <img src={heroImage} alt="" />
      </div>

      <div className="hero__Content">
        <div className="hero__Title">
          <h1>TRAVEL for HAPPINESS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            pariatur minima, tenetur corporis deleniti aut odit corrupti
            expedita hic natus?
          </p>
        </div>

        <div className="hero__Search">
          <div className="search__Container">
            <label htmlFor="">Where you want to go?</label>
            <input type="text" placeholder="Search your location..." />
          </div>

          <div className="search__Container">
            <label htmlFor="">Check In</label>
            <input type="date" placeholder="Search your location..." />
          </div>

          <div className="search__Container">
            <label htmlFor="">Check Out</label>
            <input type="date" />
          </div>
          <div className="hero__Button">
            <button>Explore Now</button>
          </div>
        </div>
        
      </div>
    </HeroContainer>
  );
};

export default Hero;
