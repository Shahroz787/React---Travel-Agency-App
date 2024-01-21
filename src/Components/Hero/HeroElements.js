import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .hero__Banner {
    height: 100%;
    img {
      width: 100%;
      height: 80vh;
      background-position: center;
      filter: brightness(80%);
      border-radius: 1rem;
    }
  }

  .hero__Content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .hero__Title {
      color: #fff;

      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }

      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: -1.2rem;
        font-size: 1.2rem;
      }
    }
  }

  .hero__Search {
    display: flex;
    padding: 0.5rem;
    background-color: #ffffffce;
    border-radius: 0.5rem;
    margin-top: -1rem;

    .search__Container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 1.5rem;

      label {
        font-size: 1.1rem;
        color: #003585;
      }

      input {
        background-color: transparent;
        border: none;
        color: #000;
        text-align: center;

        &[type="date"] {
          padding-left: 1.2rem;
        }
        &:focus {
          outline: none;
        }
      }
    }

    .hero__Button {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        padding: 1rem;
        border: none;
        border-radius: 0.3rem;
        color: #fff;
        background-color: #003585;
        font-size: 1.1rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #e30186;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;

    .hero__Banner {
      background-color: #003585;
      img {
        height: 100%;
      }
    }

    .hero__Content {
      .hero__Title {
        h1 {
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }
        p {
          font-size: 0.9rem;
          padding: 1vw;
        }
      }

      .hero__Button {
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }

    .hero__Search {
      flex-direction: column;
      padding: 0.8rem;
      gap: 0.8rem;
    }

    .search__Container {
      padding: 0 0.8rem;
      input[type="date"] {
        padding-left: 1rem;
      }
    }
  }
`;
