import React from "react";
import Image from "next/image";

export default function login() {
  return (
    <div className="row p-0 m-0">
      <div className="col-md-6 bg__container">
        <img
          src="/image/logo.svg"
          width={98}
          height={40}
          className="bg__logo"
          alt="logo"
        />
        <div className="text-center">
          <Image width={300} height={350} alt="" src="/image/phone.png" />
        </div>
        <div className="mx-5">
          <h5 className="bg__title mb-3">App that Covering Banking Needs.</h5>
          <p className="bg__desc mt-4">
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </p>
        </div>
      </div>
      <div className="col-md-4 bg__right__side">
        <h5 className="bg__form__title mb-3">
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </h5>
        <p className="bg__form__desc mb-5">
          Transfering money is eassier than ever, you can access Zwallet
          wherever you are.
        </p>
        <form action="" className="auth__input">
          <div className="input-group mb-3">
            <span
              className="input-group-text auth__input__span"
              id="basic-addon1"
            >
              <img src="/icon/mail.svg" alt="" />
            </span>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Input Your Mail"
            />
          </div>
          <div className="input-group mb-3 mt-5">
            <span
              className="input-group-text auth__input__span"
              id="basic-addon1"
            >
              <img src="/icon/lock.svg" alt="" />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              name="password"
            />
          </div>
          <p className="text-end auth__text mb-4">
            <a href="" style={{ color: "#3A3D42CC" }}>
              Forgot password?
            </a>
          </p>
          <button className="btn btn-primary auth__btn p-2 font-light">
            Login
          </button>
          <p className="text-center mt-3 auth__text">
            Don’t have an account? Let’s{" "}
            <a href="" style={{ color: "#3A3D42CC" }}>
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
