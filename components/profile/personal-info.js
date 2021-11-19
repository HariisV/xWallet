import React from "react";
import Image from "next/image";
import Styles from "styles/Profile.module.css";

export default function Personalinfo() {
  return (
    <div className="card card__shadow ">
      <div className="card-body mx-3">
        <p className={`${Styles.title}`}>Personal Information</p>
        <small className={`${Styles.desc}`}>
          We got your personal information from the sign <br /> up proccess. If
          you want to make changes on <br /> your information, contact our
          support.
        </small>
        <div className={` card card-body ${Styles.group} mt-5 card__shadow_xl`}>
          <small className={`${Styles.detail__name}`}>First Name</small>
          <p className={`${Styles.detail__value} p-0 m-0`}>Robert</p>
        </div>
        <div className={` card card-body ${Styles.group} card__shadow_xl`}>
          <small className={`${Styles.detail__name}`}>Last Name</small>
          <p className={`${Styles.detail__value} p-0 m-0`}>Chandler</p>
        </div>
        <div className={` card card-body ${Styles.group} card__shadow_xl`}>
          <small className={`${Styles.detail__name}`}>Verified E-mail</small>
          <p className={`${Styles.detail__value} p-0 m-0`}>
            pewdiepie1@gmail.com
          </p>
        </div>
        <div className={` card card-body ${Styles.group} card__shadow_xl`}>
          <small className={`${Styles.detail__name}`}>Phone Number</small>
          <p className={`${Styles.detail__value} p-0 m-0`}>+62 813-9387-7946</p>
        </div>
      </div>
    </div>
  );
}
