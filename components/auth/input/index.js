import React from "react";

export default function index(props) {
  return (
    <div className={`input-group ${props.isInvalid ? "mt-2" : "mt-4"}`}>
      <span
        className={`input-group-text ${
          props.isInvalid ? " auth__input__span_invalid" : " auth__input__span"
        }`}
        // style={{ borderBottom: "1px solid red" }}
        id="basic-addon1"
      >
        <img src={props.icon} alt="" />
      </span>
      <input
        type={props.type}
        className={`form-control ${props.isInvalid ? "is-invalid" : ""}`}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={(e) => props.onChanges(e)}
        {...props.reactForm}
      />
    </div>
  );
}
