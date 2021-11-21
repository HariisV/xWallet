import React, { useState } from "react";
import Image from "next/image";
import Styles from "styles/Profile.module.css";
import Input from "components/profile/input";
import axios from "utils/axios";
import { Notify } from "components/layout/notify";
export default function Personalinfo(props) {
  const [form, setForm] = useState({
    phone: props.data.noTelp,
  });
  const handleSubmit = () => {
    const setData = {
      noTelp: form.phone,
    };
    axios
      .patch(`user/profile/${props.data.id}`, setData)
      .then((res) => {
        Notify("Berhasil Mengapdate Nomor Telepon !", 200);
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
    <div className="card card__shadow height">
      <div className="card-body mx-3">
        <div className="d-flex justify-content-between">
          <p className={`${Styles.title}`}>Update Phone Number</p>
          <button
            className={`btn text-white  ${Styles.btn_close} `}
            onClick={() => props.changePage("Index")}
          >
            X
          </button>{" "}
        </div>

        <small className={`${Styles.desc}`}>
          Add at least one phone number for the transfer <br /> ID so you can
          start transfering your money to <br /> another user.{" "}
        </small>
        <div className="d-flex justify-content-center mt-5">
          <div className={`${Styles.containerr}`}>
            <div className={`input-group`}>
              <span className={`input-group-text ${Styles.input_span}`}>
                <img src="/icon/phone.svg" alt="" />
              </span>
              <input
                type="number"
                className={`form-control ${Styles.input}`}
                placeholder="Enter your phone number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
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
