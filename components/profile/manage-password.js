import React, { useState } from "react";
import Image from "next/image";
import Styles from "styles/Profile.module.css";
import Input from "components/profile/input";
import axios from "utils/axios";
import { Notify } from "components/layout/notify";
export default function Personalinfo(props) {
  const [form, setForm] = useState({});
  const handleSubmit = (e) => {
    const setData = {
      oldPassword: form.oldPassword,
      newPassword: form.newPassword,
      confirmPassword: form.confirmPassword,
    };
    console.log(setData);
    axios
      .patch(`/user/password/${props.data.id}`, setData)
      .then((res) => {
        Notify("Berhasil Mengubah Password !", 200);
        props.dispatch(props.data.id);
      })
      .catch((err) => {
        Notify(err.response.data.msg, 400);
      });
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="card card__shadow ">
      <div className="card-body mx-3">
        <div className="d-flex justify-content-between">
          <p className={`${Styles.title}`}>Change Password</p>
          <button
            className={`btn text-white  ${Styles.btn_close} `}
            onClick={() => props.changePage("Index")}
          >
            X
          </button>
        </div>
        <small className={`${Styles.desc}`}>
          You must enter your current password and then <br /> type your new
          password twice.
        </small>
        <div className="d-flex justify-content-center mt-5">
          <div className={`${Styles.containerr}`}>
            <Input
              placeholder="Current password"
              icon="/icon/lock.svg"
              type="password"
              name="oldPassword"
              onChange={handleChange}
            />
            <Input
              placeholder="New password"
              icon="/icon/lock.svg"
              type="password"
              name="newPassword"
              onChange={handleChange}
            />
            <Input
              placeholder="Repeat new password"
              icon="/icon/lock.svg"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
            />
            <button
              className={`btn btn-primary w-100 ${Styles.primary} mt-5`}
              onClick={handleSubmit}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
