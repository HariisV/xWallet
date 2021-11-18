import React, { useState, useEffect } from "react";
import Image from "next/image";
import Styles from "./pin.module.css";
import axios from "utils/axios";
import { connect } from "react-redux";
import { Notify, ContainerToast } from "components/reusable/notify";

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
  // margin: "auto",
};
const Pin = (props) => {
  const [isNull, setIsNull] = useState(true);
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
    const setData = {
      pin: allPin,
    };
    axios
      .patch(`/user/pin/${props.auth.idUser}`, setData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // useEffect(() => {
  //   if (pin.pin1 && pin.pin2 && pin.pin3 && pin.pin4 && pin.pin5 && pin.pin6) {
  //     setIsNull(false);
  //   }
  //   return () => {
  //     setIsNull(false);
  //   };
  // }, [pin]);
  return (
    <div className="row p-0 m-0">
      <ContainerToast />

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
          Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That
          You Created Yourself.
        </h5>
        <p className="bg__form__desc mb-5">
          Create 6 digits pin to secure all your money and your data in Zwallet
          app.
        </p>
        <div className="container text-center">
          <div className="mt-3">
            <div style={inputContainer}>
              <div className="row">
                <div className="col-2">
                  <input
                    style={inputStyle}
                    className={`${Styles.input__pin}`}
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="1"
                    id="pin-1"
                  />
                </div>
                <div className="col-2">
                  <input
                    style={inputStyle}
                    className={`${Styles.input__pin}`}
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="2"
                    id="pin-2"
                  />
                </div>
                <div className="col-2">
                  <input
                    style={inputStyle}
                    className={`${Styles.input__pin}`}
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
                    className={`${Styles.input__pin}`}
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="4"
                    id="pin-4"
                  />
                </div>
                <div className="col-2">
                  <input
                    style={inputStyle}
                    className={`${Styles.input__pin}`}
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="5"
                    id="pin-5"
                  />
                </div>
                <div className="col-2">
                  <input
                    style={inputStyle}
                    className={`${Styles.input__pin}`}
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="6"
                    id="pin-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            className={`btn ${
              isNull ? "btn-secondary" : "btn-primary"
            } auth__btn p-2 font-light mt-5`}
            onClick={isNull ? null : handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Pin);
