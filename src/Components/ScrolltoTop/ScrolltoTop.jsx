import React, { useState } from "react";
import { ScrolltoTopContainer } from "./ScrolltoTopElements";
import logo from "../../Assets/scrollLogo.png";

import { useEffect } from "react";

const ScrolltoTop = () => {
  const { scrollState, setScrollState } = useState(false);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollState(false);
      } else {
        setScrollState(true);
      }
    });
  }, []);

  return (
    <ScrolltoTopContainer>
      {scrollState && <img src={logo} onClick={toTop} alt="Scroll logo" />}
    </ScrolltoTopContainer>
  );
};

export default ScrolltoTop;
