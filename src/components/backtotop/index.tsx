import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import { BackToTopStyle } from "./styles";

const BackToTop: React.FC = (): JSX.Element => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 2000) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 2000) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <BackToTopStyle>
      <FaArrowCircleUp
        onClick={scrollTop}
        style={{ height: 55, display: showScroll ? "flex" : "none" }}
      />
    </BackToTopStyle>
  );
};

export default BackToTop;
