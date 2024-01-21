import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;

  background-color: #f0f8ff;
  padding: 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: #003585;

  span {
    margin-top: 1.1rem;
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;

    li {
      a {
        text-decoration: none;
        color: #000;
        transition: 0.3s ease-in-out;
        color: #003585;

        &:hover {
          color: #e30186;
        }
      }

      svg {
        font-size: 1.4rem;
        transition: 0.3s ease-in-out;

        &:hover {
          color: #e30186;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1024px) {
      
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }

    .social__Links {
      flex-direction: row;
    }
  }
`;
