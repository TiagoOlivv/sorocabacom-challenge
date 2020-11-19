import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

import { Container } from "./styles";

const ScrollDown: React.FC = (): JSX.Element => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    } else if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 1115, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Container>
      <FaArrowCircleDown
        onClick={scrollTop}
        style={{ height: 30, display: showScroll ? "none" : "flex" }}
      />
    </Container>
  );
};

export default ScrollDown;
