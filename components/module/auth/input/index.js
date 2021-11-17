import React from "react";

export default function index(props) {
  return (
    <div className="input-group mb-4">
      <span className="input-group-text auth__input__span" id="basic-addon1">
        <img src={props.icon} alt="" />
      </span>
      <input
        type={props.type}
        className="form-control"
        name={props.name}
        placeholder={props.placeholder}
        onChange={() => props.onChange(event)}
      />
    </div>
  );
}
