import React from "react";
import styled from "styled-components";

const DotIndex = styled.span`
  padding: 5px;
  margin-right: 3px;
  cursor: pointer;
  border-radius: 50px;
  border: 2px solid gray;
  width: ${({ active }) => (active ? "20px" : "0px")};
  background: ${({ active }) => (active ? "white" : "white")};
`;
const Dots = ({ slides, activeIndex }) => (
  <div
    style={{
      position: "absolute",
      bottom: "5%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
    }}
  >
    {slides.map((slide, i) => (
      <DotIndex key={slide} active={activeIndex === i} />
    ))}
  </div>
);

export default Dots;
