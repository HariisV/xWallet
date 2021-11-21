import React from "react";
import Styles from "components/layout/sidebar/sidebar.module.css";

export default function index() {
  return (
    <button className={`btn btn-primary text-white ${Styles.btn} mt-5 `}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </button>
  );
}
