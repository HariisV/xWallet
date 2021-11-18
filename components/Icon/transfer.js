import React from "react";

export default function Svg({ stroke }) {
  return (
    <>
      <svg
        width="28"
        height="28"
        style={{ alignSelf: "center" }}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 22.1663V5.83301"
          stroke={stroke}
          strokeOpacity="0.8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83333 13.9997L14 5.83301L22.1667 13.9997"
          stroke={stroke}
          strokeOpacity="0.8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
