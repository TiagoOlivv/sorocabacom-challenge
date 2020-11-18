import React from "react";
import AliceCarousel from "react-alice-carousel";

import Grant from "../../assets/Grant.png";
import Red from "../../assets/Red.png";
import Sybil from "../../assets/Sybil_2.png";

import { CarouselStyle, Card } from "./styles";

import "react-alice-carousel/lib/alice-carousel.css";

const Carousel: React.FC = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const cardsLength = [
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

  const Cards = cardsLength.map((item, index) => {
    return (
      <CarouselStyle>
        <Card>
          <div>
            <img src={item.img} alt="Grant" />
          </div>
          <p>{item.text}</p>
        </Card>
      </CarouselStyle>
    );
  });

  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={2000}
      animationDuration={1000}
      animationType="fadeout"
      paddingLeft={25}
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
