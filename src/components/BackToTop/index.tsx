import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import { Container } from "./styles";

const BackToTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 1500) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 1500) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Container>
      <FaArrowCircleUp
        onClick={scrollTop}
        style={{ height: 55, display: showScroll ? "flex" : "none" }}
      />
    </Container>
  );
};

export default BackToTop;
