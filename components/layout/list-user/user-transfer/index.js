import React from "react";
import Link from "next/link";
import Styles from "styles/Home.module.css";

export default function Index(props) {
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
        <div className="d-block link__transfer">
          <Link href={`/transfer/${props.id}`} className="bg-primary" passHref>
            <p className={`p-0 m-0 ${Styles.name}`}>{props.name}</p>
          </Link>
          <small className={`${Styles.type}`}>{props.noTelp}</small>
        </div>
      </div>
    </div>
  );
}
