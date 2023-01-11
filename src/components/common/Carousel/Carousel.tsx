import { _Carousel } from "./_Carousel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useGlobalContext } from "../../../context/globalContext";
import React from "react";

export const Carousel = (props: any) => {
  const { currentSlide, setNextSlide, setPreviousSlide } = useGlobalContext();

  return (
    <_Carousel>
      <FaChevronLeft
        className="leftArrow"
        onClick={() =>
          setPreviousSlide(
            currentSlide === 0 ? currentSlide + 5 : currentSlide - 1
          )
        }
      />
      {props.children}

      <FaChevronRight
        className="rightArrow"
        onClick={() =>
          setNextSlide(currentSlide === 5 ? currentSlide - 5 : currentSlide + 1)
        }
      />
    </_Carousel>
  );
};
