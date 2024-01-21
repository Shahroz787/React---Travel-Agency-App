import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    .container {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: 900;
      justify-content: center;
      color: #003585;

      span {
        ::first-letter {
          color: #e30186;
          font-size: 1.8rem;
        }
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  .nav__Menu > ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;

    li > a {
      text-decoration: none;
      font-size: 1.3rem;
      color: #003585;
      transition: 0.2s ease-in-out;
      cursor: pointer;

      &:hover {
        color: #e30186;
      }
    }
  }

  .nav__Menu > ul > li {
    &:first-child {
      a {
        color: #003585;
        font-weight: 900;
      }
    }
  }

  .nav__Button {
    button {
      padding: 0.5rem 1rem;
      color: #fff;
      background-color: #003585;
      border-radius: 1rem;
      border: none;
      cursor: pointer;
      letter-spacing: 0.1rem;
      font-size: 1.1rem;
      text-transform: uppercase;
      transition: 0.3s ease-in-out;

      &:hover {
        background-color: #e30186;
      }
    }
  }

  .toggle {
    display: none;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .toggle {
      display: block;
      svg {
        font-size: 1.8rem;
        cursor: pointer;
      }
    }

    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .container {
        img {
          width: 2.7rem;
          height: 3rem;
        }
        span {
          font-size: 1rem;
        }

        span {
          ::first-letter {
            font-size: 1.5rem;
          }
        }
      }
    }

    .nav__Menu {
      ul {
        display: none;
      }
    }

    .nav__Button {
      button {
        display: none;
      }
    }
  }
`;

export const ResponsiveNav = styled.nav`
  .nav__Menu {
    display: flex;
    position: absolute;
    z-index: 5;
    background-color: #fff;
    width: 100%;
    height: 30vh;
    transition: 0.5s ease-in-out;
    align-items: center;
    top: ${({ state }) => (state ? "70px" : "-400px")};
    ul {
      list-style-type: none;
      width: 100%;

      li {
        width: 100%;
        margin: 1rem 0;
        margin-left: 2rem;

        a {
          text-decoration: none;
          font-size: 1.3rem;
          color: #003585;
          cursor: pointer;
          transition: 0.2s ease-in-out;

          &:hover {
            color: #e30186;
          }
        }

        &:first-child {
          a {
            color: #003585;
            font-weight: 900;
          }
        }
      }
    }
  }
`;
