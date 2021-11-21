import React from "react";
import Styles from "styles/Profile.module.css";

export default function index(props) {
  return (
    <div className={`input-group ${props.isInvalid ? "mb-2" : "mb-4"}`}>
      <span className={`input-group-text ${Styles.input_span}`}>
        <img src={props.icon} alt="" />
      </span>
      <input
        type={props.type}
        className={`form-control ${Styles.input} ${
          props.isInvalid ? "is-invalid" : ""
        }`}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={(e) => (props.onChange ? props.onChange(e) : null)}
      />
    </div>
  );
}
