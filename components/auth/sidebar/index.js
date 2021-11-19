import React from "react";
import Image from "next/image";

export default function index() {
  return (
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
          users in the world. Always updated and always following world trends.
          5000+ users registered in Zwallet everyday with worldwide users
          coverage.
        </p>
      </div>
    </div>
  );
}
