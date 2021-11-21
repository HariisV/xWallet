import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "utils/axios";
import { Notify, ContainerToast } from "components/layout/notify";
import { useRouter } from "next/router";
import Link from "next/link";
import Sidebar from "components/auth/sidebar";

import { getDataCookie } from "middleware/authorizationPage";
export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return { props: {} };
}
export default function Forgot() {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [isNull, setIsNull] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const setData = {
      email: form.email,
      linkDirect: `${process.env.URL_FRONTEND}/auth/forgot-password`,
    };
    // /console.log("asdasdas", setData.linkDirect);
    axios
      .post("/auth/forgot-password", setData)
      .then((res) => {
        Notify("Berhasil ! Silahkan Periksa Email Anda.", 200);
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      })
      .catch((err) => {
        Notify(err.response.data.msg, 400);
        // console.log(err.response);
      });
  };
  return (
    <div className="row p-0 m-0">
      <ContainerToast />
      <Sidebar />
      <div className="col-md-4 bg__right__side mt-5">
        <h5 className="bg__form__title mb-3">
          Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password
          In a Minutes.
        </h5>
        <p className="bg__form__desc mb-5">
          To reset your password, you must type your e-mail and we will send a
          link to your email.
        </p>
        <form action="" className="auth__input mt-5" onSubmit={handleSubmit}>
          <div className="input-group mb-3 mt-5">
            <span
              className="input-group-text auth__input__span"
              id="basic-addon1"
            >
              <img src="/icon/mail.svg" alt="" />
            </span>
            <input
              type="text"
              required
              onChange={(e) => {
                setForm({ ...form, [e.target.name]: e.target.value });
                if (e.target.value) {
                  setIsNull(false);
                } else {
                  setIsNull(true);
                }
              }}
              className="form-control"
              placeholder="Enter Your Email"
              name="email"
            />
          </div>

          {isNull ? (
            <a className="btn btn-secondary auth__btn p-2 font-light mt-3">
              Confirm
            </a>
          ) : (
            <button className="btn btn-primary auth__btn p-2 font-light mt-3">
              Forgot Password
            </button>
          )}

          <p className="text-center mt-3 auth__text">
            Don’t have an account? Let’s{" "}
            <Link href="/auth/register" style={{ color: "#3A3D42CC" }}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
