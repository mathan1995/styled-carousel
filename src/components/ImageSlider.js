import React, { useEffect, useRef, useState } from "react";
import { SliderData } from "./SliderData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Dots from "./Dot";

const ImageSlider = ({ slides, autoplayTime }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, autoplayTime);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
      <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    backgroundImage: `url(${slide})`,
                    minWidth: 1200,
                    minHeight: 700,
                    // minWidth: window.innerWidth,
                    // minHeight: window.innerHeight,
                    borderRadius: 20,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "50% 50%",
                  }}
                />
              </div>
            )}
            <Dots slides={SliderData} activeIndex={current} />
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
