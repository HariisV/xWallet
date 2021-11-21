import React, { useRef, useState } from "react";
import Image from "next/image";
import Styles from "styles/Profile.module.css";
import axios from "utils/axios";
import { Notify } from "components/layout/notify";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Personalinfo(props) {
  const router = useRouter();
  const inputFile = useRef(null);
  const [formImage, setFormImage] = useState({
    image: "",
  });
  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove("token", { path: "" });
    router.push("/auth/login");
  };
  console.log(props);
  const onButtonClick = () => {
    inputFile.current.click();
  };
  const handleChangeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      // const { name, value } = event.target;
      const formData = new FormData();
      formData.append("image", event.target.files[0]);
      console.log("JALANIN");
      axios
        .patch(`/user/image/${props.data.id}`, formData)
        .then((res) => {
          props.dispatch(props.data.id);
          Notify("Berhasil Mengganti Image Profile!", 200);
        })
        .catch((err) => {
          console.log(err);
          // err.response.data.msg && Notify(err.response.data.msg, 400);
        });
    }
  };
  return (
    <div className="card card__shadow ">
      <div className="card-body mx-3 text-center">
        <img
          src={
            props.data.image
              ? `${process.env.URL_BACKEND}/uploads/${props.data.image}`
              : "/image/avatard.png"
          }
          className={` ${Styles.navbar__image}`}
          alt=""
        />
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-light text-black" onClick={onButtonClick}>
            <Image src="/icon/edit.svg" alt="" width={13} height={13} />
            <input
              type="file"
              id="file"
              ref={inputFile}
              onChange={handleChangeImage}
              style={{ display: "none" }}
            />

            <span className={`align-self-center ${Styles.geser}`}>Edit</span>
          </button>
        </div>
        <p className={`${Styles.nama__user}`}>
          {props.data.firstName + " " + props.data.lastName}
        </p>
        <small className={`${Styles.mobile__user}`}>
          {props.data.noTelp ? props.data.noTelp : "+62 xxxx xxxx xxxx"}{" "}
        </small>
        <br />
        <button
          className={`${Styles.btn__list} btn mt-5 `}
          onClick={() => props.changePage("personalInfo")}
        >
          <div
            className={`d-flex justify-content-between ${Styles.btn__detail}`}
          >
            <p>Personal Information</p>
            <img src="/icon/arrow-left.svg" alt="" />
          </div>
        </button>
        <br />
        <button
          className={`${Styles.btn__list} btn `}
          onClick={() => props.changePage("ManagePassword")}
        >
          <div
            className={`d-flex justify-content-between ${Styles.btn__detail}`}
          >
            <p>Change Password</p>
            <img src="/icon/arrow-left.svg" alt="" />
          </div>
        </button>
        <br />
        <button
          className={`${Styles.btn__list} btn `}
          onClick={() => props.changePage("CheckPin")}
        >
          <div
            className={`d-flex justify-content-between ${Styles.btn__detail}`}
          >
            <p>Change PIN</p>
            <img src="/icon/arrow-left.svg" alt="" />
          </div>
        </button>
        <br />
        <button className={`${Styles.btn__list} btn `} onClick={handleLogout}>
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
