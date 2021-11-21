import React from "react";
import Styles from "styles/Home.module.css";

export default function UserHistory(props) {
  return (
    <div className="d-flex mb-5 mt-4 justify-content-between">
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
            {props.type == "topup"
              ? "Topup"
              : props.type == "send"
              ? "Transfer"
              : ""}
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
              : props.type == "send"
              ? Styles.transfer
              : ""
          }`}
        >
          {" "}
          {props.type == "send" ? "-" : "+"} Rp{" "}
          {props.total.toLocaleString("id-ID")}
        </p>
        {/* <p className={`${Styles.transfer}`}>-Rp50.000</p> */}
        {/* <p className={`${Styles.topup}`}>+ 400.000</p> */}
      </div>
    </div>
  );
}
