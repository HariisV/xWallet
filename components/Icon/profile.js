import React from "react";

export default function Svg({ stroke }) {
  return (
    <>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        style={{ alignSelf: "center" }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 20C4 17 8 17 10 15C11 14 8 14 8 9C8 5.667 9.333 4 12 4C14.667 4 16 5.667 16 9C16 14 13 14 14 15C16 17 20 17 20 20"
          stroke={stroke}
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
