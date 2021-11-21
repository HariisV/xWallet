import React from "react";
import Styles from "components/layout/sidebar/sidebar.module.css";

export default function index() {
  return (
    <button className={`btn btn-secondary text-white ${Styles.btn} mt-5 `}>
      Minimal Rp 1000
    </button>
  );
}
