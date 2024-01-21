import styled from "styled-components";

export const ServicesContainer = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  .service {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .service__Icon {
      img {
        height: 2.4rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }


  @media screen and (min-width: 720px) and (max-width: 1080px){
    grid-template-columns: repeat(2, 1fr);
  }
`;
