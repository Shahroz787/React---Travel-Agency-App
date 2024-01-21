import React from "react";
import { FooterContainer } from "./FooterElements";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <span>Copyright &copy; All rights reserved by Shahroz Ahmed.</span>

      <ul className="footer__Nav__Links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
      </ul>

      <ul className="social__Links">
        <li>
          <a href="https://www.facebook.com">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
