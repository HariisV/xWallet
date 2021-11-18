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
          d="M14 5.83301V22.1663"
          stroke={stroke}
          strokeOpacity="0.8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83333 14H22.1667"
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
