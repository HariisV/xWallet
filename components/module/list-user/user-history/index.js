import React from "react";
import Styles from "styles/Home.module.css";

export default function index() {
  return (
    <div className="d-flex mb-5 mt-4 justify-content-between">
      <div className="d-flex">
        <img
          src="/image/user3.png"
          alt=""
          width="50px"
          className="mrgin-3"
          height="50px"
        />
        <div className="d-block">
          <p className={`p-0 m-0 ${Styles.name}`}>Robert Chandler</p>
          <small className={`${Styles.type}`}>Top up</small>
        </div>
      </div>
      <div>
        <p className={`${Styles.transfer}`}>-Rp50.000</p>
        {/* <p className={`${Styles.topup}`}>+ 400.000</p> */}
      </div>
    </div>
  );
}
