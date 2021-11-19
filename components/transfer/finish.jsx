import React, { useState } from "react";
import ListUser from "components/module/list-user/user-transfer";
import Styles from "styles/Transfer.module.css";
import Modal from "react-bootstrap/Modal";
const inputStyle = {
  width: "50px",
  height: "65px",
  background: "#FFFFFF",
  border: "1px solid rgba(169, 169, 169, 0.6)",
  boxSizing: "border-box",
  boxShadow: "0px 10px 75px rgba(147, 147, 147, 0.1)",
  borderRadius: "10px",
};

const inputContainer = {
  width: "100%",
};

export default function Confirm(props) {
  return (
    <div>
      <div className="card-body  mx-3">
        <div className=" bg__right__side text-center ">
          <img src="/image/success.png" alt="" width="80px" />
          <h5 className="bg__form__title mb-3 mt-3">Transfer Success</h5>
        </div>
        <p className={`${Styles.transfer__transfer__text}`}>Details Transfer</p>

        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>Amount</small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
            Rp100.000
          </p>
        </div>
        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>
            Balance Left
          </small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
            Rp20.000
          </p>
        </div>
        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>
            Date & Time
          </small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
            May 11, 2020 - 12.20
          </p>
        </div>
        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>Notes</small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
            For buying some socks
          </p>
        </div>
        <p className={`${Styles.transfer__transfer__text}`}>Transfer Money</p>
        <ListUser />

        <div className="d-flex justify-content-end mt-4 mb-3">
          <button className={`btn btn-primary text-white ${Styles.btn}`}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
