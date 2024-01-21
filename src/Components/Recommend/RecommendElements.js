import styled from "styled-components";

export const RecommendContainer = styled.section`
  padding: 2rem 0;

  .destinations__Title {
    h2 {
      text-align: center;
    }
  }

  .destinations__Packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;

      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        cursor: pointer;
      }
      .active {
        border-bottom: 0.5rem solid #003585;
      }
    }
  }

  .Destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;

    .destinations__Content {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;

      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      h3 {
        margin-bottom: -0.3rem;
      }

      img {
        width: 100%;
        height: 40vh;
        border-radius: 0.7rem;
      }

      .destinations__Info {
        display: flex;
        align-items: center;

        h4 {
          margin-bottom: 10px;
        }
        .destinations__Services {
          display: flex;
          gap: 0.3rem;
          img {
            width: 2rem;
            height: 2.4rem;
            border-radius: 3rem;
            background-color: #003585;
            padding: 0.2rem 0.4rem;

            margin-bottom: 1rem;
          }
        }

        display: flex;
        justify-content: space-between;
      }

      .destinations__Distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .destinations__Packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }

        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }

    .Destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
