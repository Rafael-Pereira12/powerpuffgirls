import { _Carousel } from "./_Carousel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useGlobalContext } from "../../../context/globalContext";

export const Carousel = (props: any) => {
  const { currentSlide, setNextSlide, setPreviousSlide, seasonDetails } =
    useGlobalContext();

  const seasonCount = Object.values(seasonDetails).length - 1;

  return (
    <_Carousel>
      <FaChevronLeft
        className="leftArrow"
        onClick={() =>
          setPreviousSlide(
            currentSlide === 0 ? currentSlide + seasonCount : currentSlide - 1
          )
        }
      />
      {props.children}

      <FaChevronRight
        className="rightArrow"
        onClick={() =>
          setNextSlide(
            currentSlide === seasonCount
              ? currentSlide - seasonCount
              : currentSlide + 1
          )
        }
      />
    </_Carousel>
  );
};
