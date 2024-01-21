import React from "react";
import { RecommendContainer } from "./RecommendElements";
import { recommendData, recommendPackages } from "./RecommendData";
import { useState } from "react";

import info1 from "../../Assets/info1.png";
import info2 from "../../Assets/info2.png";
import info3 from "../../Assets/info3.png";

const Recommend = () => {
  const [active, setActive] = useState(1);

  return (
    <RecommendContainer id="recommend">
      <div className="destinations__Title">
        <h2>Recommend Destinations</h2>
      </div>

      <div className="destinations__Packages">
        <ul>
          {recommendPackages.map((packagesData, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {packagesData}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="Destinations">
        {recommendData.map((data) => {
          return (
            <div className="destinations__Content">
              <img src={data.image} alt="Destination Pic" />
              <h3>{data.title}</h3>
              <p>{data.subTitle}</p>
              <div className="destinations__Info">
                <div className="destinations__Services">
                  <img src={info1} alt="Info Pic" />
                  <img src={info2} alt="Info Pic" />
                  <img src={info3} alt="Info Pic" />
                </div>

                <h4>{data.cost}</h4>
              </div>
              <div className="destinations__Distance">
                <span>500 kms</span>
                <span>{data.duration}</span>
              </div>
              
            </div>
          );
        })}
      </div>
    </RecommendContainer>
  );
};

export default Recommend;
