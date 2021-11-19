import React from "react";
import Image from "next/image";
import Styles from "styles/Profile.module.css";

export default function Personalinfo() {
  return (
    <div className="card card__shadow ">
      <div className="card-body mx-3 text-center">
        <img
          src="/image/user.png"
          className={` ${Styles.navbar__image}`}
          alt=""
        />
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-light text-black">
            <Image src="/icon/edit.svg" alt="" width={13} height={13} />
            <span className={`align-self-center ${Styles.geser}`}>Edit</span>
          </button>
        </div>
        <p className={`${Styles.nama__user}`}>Robert Chandler</p>
        <small className={`${Styles.mobile__user}`}>
          +62 813-9387-7946
        </small>{" "}
        <br />
        <button className={`${Styles.btn__list} btn mt-5 `}>
          <div
            className={`d-flex justify-content-between ${Styles.btn__detail}`}
          >
            <p>Personal Information</p>
            <img src="/icon/arrow-left.svg" alt="" />
          </div>
        </button>
        <br />
        <button className={`${Styles.btn__list} btn `}>
          <div
            className={`d-flex justify-content-between ${Styles.btn__detail}`}
          >
            <p>Change Password</p>
            <img src="/icon/arrow-left.svg" alt="" />
          </div>
        </button>
        <br />
        <button className={`${Styles.btn__list} btn `}>
          <div
            className={`d-flex justify-content-between ${Styles.btn__detail}`}
          >
            <p>Change PIN</p>
            <img src="/icon/arrow-left.svg" alt="" />
          </div>
        </button>
        <br />
        <button className={`${Styles.btn__list} btn `}>
          <p
            style={{ textAlign: "start", fontWeight: "600" }}
            className="p-0 m-0"
          >
            Logout
          </p>
        </button>
      </div>
    </div>
  );
}
