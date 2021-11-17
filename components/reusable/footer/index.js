import React from "react";
import Style from "./footer.module.css";
export default function index() {
  return (
    <>
      <div className={`${Style.footer}`}>
        <div className="container">
          <div className="d-flex justify-content-between">
            <p>2021 Zwallet. All right reserved.</p>
            <p>contact@zwallet.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
