import React from "react";
import { TestimonialContainer } from "./TestimonialElements";
import testimonialAvatar from "../../Assets/testimonialAvatar.jpg";

const Testimonial = () => {
  return (
    <TestimonialContainer id="testimonial">
      <div className="testimonials__Title">
        <h2>Happy Customers</h2>
      </div>

      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
            non.
          </p>

          <div className="testimonial__Info">
            <img src={testimonialAvatar} alt="avatar pic" />

            <div className="testimonial__Details">
              <h4>Shahroz Ahmed</h4>
              <span>CEO of Dummy</span>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
            non.
          </p>

          <div className="testimonial__Info">
            <img src={testimonialAvatar} alt="avatar pic" />

            <div className="testimonial__Details">
              <h4>Shahroz Ahmed</h4>
              <span>CEO of Dash</span>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
            non.
          </p>

          <div className="testimonial__Info">
            <img src={testimonialAvatar} alt="avatar pic" />

            <div className="testimonial__Details">
              <h4>Shahroz Ahmed</h4>
              <span>CEO of Null</span>
            </div>
          </div>
        </div>
      </div>
    </TestimonialContainer>
  );
};

export default Testimonial;
