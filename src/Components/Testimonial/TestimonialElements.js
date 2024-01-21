import styled from "styled-components";

export const TestimonialContainer = styled.section`
  margin: 5rem 0;

  .testimonials__Title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      padding: 2rem;
      background-color: aliceblue;
      border-radius: 1rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;

      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .testimonial__Info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;

        img {
          height: 3rem;
          border-radius: 3rem;
        }

        .testimonial__Details {
          font-size: 1.1rem;
          h4 {
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;

      .testimonial {
        justify-content: center;


        .testimonial__Info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
