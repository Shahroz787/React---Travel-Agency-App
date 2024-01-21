import React, { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Recommend from "./Components/Recommend/Recommend";
import ScrolltoTop from "./Components/ScrolltoTop/ScrolltoTop";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import ScrollToTop from "react-scroll-to-top";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(
      `
      nav,
      #hero,
      #services,
      #recommend,
      #testimonial,
      footer
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <ScrollToTop
        smooth
        style={{ backgroundColor: "#002869" }}
        color="white"
      />

      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
