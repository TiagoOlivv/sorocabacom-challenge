import React, { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

import { ScrollDownStyle } from "./styles";

const ScrollDown: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollDown = () => {
    if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    } else if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    }
  };

  const scrollDown = () => {
    window.scrollTo({ top: 1115, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollDown);

  return (
    <ScrollDownStyle>
      <FaArrowCircleDown
        onClick={scrollDown}
        style={{ height: 40, display: showScroll ? "none" : "flex" }}
      />
    </ScrollDownStyle>
  );
};

export default ScrollDown;
