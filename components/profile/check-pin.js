import React, { useState } from "react";
import Styles from "styles/Profile.module.css";
import axios from "utils/axios";
import { Notify } from "components/layout/notify";
const inputStyle = {
  width: "50px",
  height: "65px",
  background: "#FFFFFF",
  border: "1px solid rgba(169, 169, 169, 0.6)",
  boxSizing: "border-box",
  boxShadow: "0px 10px 75px rgba(147, 147, 147, 0.1)",
  borderRadius: "10px",
};

const inputContainer = {
  width: "100%",
};

export default function Personalinfo(props) {
  const [pin, setPin] = useState({});
  const addPin = (event) => {
    if (event.target.value) {
      const nextSibling = document.getElementById(
        `pin-${parseInt(event.target.name, 10) + 1}`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
    setPin({ ...pin, [`pin${event.target.name}`]: event.target.value });
  };
  const handleSubmit = () => {
    const allPin =
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
    // const setData = {
    //   pin: allPin,
    // };
    axios
      .get(`/user/pin?pin=${allPin}`)
      .then((res) => {
        Notify("Pin Benar !", 200);
        props.changePage("ManagePin");
      })
      .catch((err) => {
        Notify(err.response.data.msg, 400);
      });

    // console.log(setData);
  };
  return (
    <div className="card card__shadow ">
      <div className="card-body mx-3 ppp">
        <div className="d-flex justify-content-between">
          <p className={`${Styles.title}`}>Check Pin</p>
          <button
            className={`btn text-white  ${Styles.btn_close} `}
            onClick={() => props.changePage("Index")}
          >
            X
          </button>{" "}
        </div>
        <small className={`${Styles.desc}`}>
          Enter your current 6 digits Zwallet PIN below to <br /> continue to
          the next steps.{" "}
        </small>
        <div className="d-flex justify-content-center mt-5">
          <div className={`${Styles.containerr}`}>
            {" "}
            <div style={inputContainer}>
              <div className="row">
                <div className="col-2">
                  <input
                    style={inputStyle}
                    className="input__pin"
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="1"
                    id="pin-1"
                  />
                </div>
                <div className="col-2">
                  <input
                    style={inputStyle}
                    className="input__pin"
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="2"
                    id="pin-2"
                  />
                </div>
                <div className="col-2">
                  <input
                    style={inputStyle}
                    className="input__pin"
                    maxLength="1"
                    required
                    onChange={(event) => addPin(event)}
                    name="3"
                    id="pin-3"
                  />
                </div>
                <div className="col-2">
                  <input
                    style={inputStyle}
                    className="input__pin"
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="4"
                    id="pin-4"
                  />
                </div>
                <div className="col-2">
                  <input
                    style={inputStyle}
                    className="input__pin"
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="5"
                    id="pin-5"
                  />
                </div>
                <div className="col-2">
                  <input
                    style={inputStyle}
                    className="input__pin"
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="6"
                    id="pin-6"
                  />
                </div>
              </div>
            </div>
            <button
              className={`btn btn-primary  mb-5 w-100 ${Styles.primary} mt-5`}
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
