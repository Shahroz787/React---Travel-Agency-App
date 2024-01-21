import React from "react";
import { servicesData } from "./ServicesData";
import { ServicesContainer } from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      {servicesData.map((data, index) => {
        return (
          <div className="service" key={index}>
            <div className="service__Icon">
              <img src={data.icon} alt="serviceIcon" />
            </div>
            <h3>{data.title}</h3>
            <p>{data.subTitle}</p>
          </div>
        );
      })}
    </ServicesContainer>
  );
};

export default Services;
