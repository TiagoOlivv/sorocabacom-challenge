import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Grant from "../../assets/Grant.png";
import Red from "../../assets/Red.png";
import Sybil from "../../assets/Sybil_2.png";

import { CarouselStyle, CardStyle } from "./styles";

const Carousel: React.FC = () => {
  const responsive = {
    568: { items: 1 },
    569: { items: 2 },
    1024: { items: 3 },
  };

  const cardsList = [
    {
      img: Grant,
      text:
        "A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão.",
    },
    {
      img: Red,
      text:
        "Red, uma jovem cantora, entrou em posse do Transistor. Sendo a poderosa espada falante. O grupo Possessores quer tanto ela quanto o Transistor e está perseguindo implacavelmente a sua procura.",
    },
    {
      img: Sybil,
      text: `Sybil é descrita pelo Transistor como sendo os ${"olhos e ouvidos"} da Camerata.`,
    },
  ];

  const Cards = cardsList.map((item, index) => {
    return (
      <CarouselStyle>
        <CardStyle>
          <div>
            <img src={item.img} alt="Grant" />
          </div>
          <p>{item.text}</p>
        </CardStyle>
      </CarouselStyle>
    );
  });

  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={1000}
      animationDuration={1000}
      animationType="fadeout"
      responsive={responsive}
      infinite
      mouseTracking
      items={Cards}
      disableDotsControls
      disableButtonsControls
    />
  );
};

export default Carousel;
