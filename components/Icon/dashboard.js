import React from "react";

export default function Svg({ stroke }) {
  return (
    <>
      <svg
        width="28"
        style={{ alignSelf: "center" }}
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6667 3.5H3.5V11.6667H11.6667V3.5Z"
          stroke={stroke}
          strokeOpacity="0.8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.4999 3.5H16.3333V11.6667H24.4999V3.5Z"
          stroke={stroke}
          strokeOpacity="0.8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.4999 16.333H16.3333V24.4997H24.4999V16.333Z"
          stroke={stroke}
          strokeOpacity="0.8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6667 16.333H3.5V24.4997H11.6667V16.333Z"
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
