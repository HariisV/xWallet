import React from "react";
import Styles from "styles/Home.module.css";

export default function index(props) {
  return (
    <div className="d-flex mb-4 mt-3 justify-content-between">
      <div className="d-flex">
        <img
          src={
            props.image
              ? `${process.env.URL_BACKEND}/uploads/${props.image}`
              : "/image/avatard.png"
          }
          alt=""
          width="50px"
          className="mrgin-3"
          height="50px"
        />
        <div className="d-block">
          <p className={`p-0 m-0 ${Styles.name}`}>{props.name}</p>
          <small className={`${Styles.type}`}>
            {props.type == "topup" ? "Topup" : ""}
          </small>
        </div>
      </div>
      <div>
        <p
          className={`${
            props.type == "topup"
              ? props.status == "success"
                ? Styles.topup
                : Styles.pending
              : props.type == "transfer"
              ? Styles.transfer
              : ""
          }`}
        >
          {props.type == "transfer" ? "-" : "+"} Rp{" "}
          {props.total.toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  );
}
