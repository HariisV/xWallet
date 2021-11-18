import React from "react";
import Styles from "styles/Home.module.css";

export default function index() {
  return (
    <div className="d-flex mt-3">
      <img
        src="/image/user3.png"
        alt=""
        width="50px"
        className="mrgin-3"
        height="50px"
      />
      <div className="" style={{ display: "block" }}>
        <p className={`p-0 m-0 ${Styles.name}`}>Robert Chandler</p>
        <small className={`${Styles.type}`}>Top up</small>
      </div>
      <div className="align-self-center mt-2">
        <p className={`${Styles.transfer}`}>- 400.000</p>
        {/* <p className={`${Styles.topup}`}>+ 400.000</p> */}
      </div>
    </div>
  );
}
