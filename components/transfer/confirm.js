import React, { useState, useEffect } from "react";
import ListUser from "components/layout/list-user/user-transfer";
import Styles from "styles/Transfer.module.css";
import Modal from "react-bootstrap/Modal";
import axios from "utils/axios";
import BtnLoading from "components/btn/loading";
import { Notify } from "components/layout/notify";
import { useRouter } from "next/router";
// const inputStyle = {
//   height: "65px",
//   background: "#FFFFFF",
//   border: "1px solid rgba(169, 169, 169, 0.6)",
//   boxSizing: "border-box",
//   boxShadow: "0px 10px 75px rgba(147, 147, 147, 0.1)",
//   borderRadius: "10px",
// };

const inputContainer = {
  width: "100%",
};

export default function Confirm(props) {
  const [show, setShow] = useState(false);
  const [pin, setPin] = useState({});
  const [isNull, setIsNull] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter();
  useEffect(() => {
    if (pin.pin1 && pin.pin2 && pin.pin3 && pin.pin4 && pin.pin5 && pin.pin6) {
      setIsNull(false);
    } else {
      setIsNull(true);
    }
  }, [pin]);
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
    setIsLoading(true);
    const allPin =
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
    axios
      .get(`/user/pin?pin=${allPin}`)
      .then((res) => {
        Notify("Transfer Di Proses !", 200);
        setTimeout(() => {
          const setData = {
            receiverId: props.receiverId,
            amount: props.balanceTransfer.replace(/[^0-9]/g, ""),
            notes: props.Notes,
          };
          axios
            .post("transaction/transfer", setData)
            .then((res) => {
              Notify("Transfer Berhasil !", 200);
              setTimeout(() => {
                router.push(`/history/${res.data.data.id}`);
              }, 2000);
            })
            .catch((err) => {
              Notify(err.response.data.msg, 400);
            });
        }, 4000);
      })
      .catch((err) => {
        Notify(err.response.data.msg, 400);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
          setPin({
            pin1: "",
            pin2: "",
            pin3: "",
            pin4: "",
            pin5: "",
            pin6: "",
          });
        }, 3000);
      });
  };
  const balanceLeft =
    props.saldoUser - props.balanceTransfer.replace(/[^0-9]/g, "");
  let d = new Date();
  d = `${d.toLocaleDateString("id-ID", {
    weekday: "long",
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  })}`;
  return (
    <div>
      <div className="card-body  mx-3">
        <p className="card__title">Transfer Money</p>
        <ListUser
          name={props.data.firstName + " " + props.data.lastName}
          noTelp={props.data.noTelp}
          image={props.data.image}
          id={props.data.id}
        />
        <p className={`${Styles.transfer__transfer__title}`}>
          Details Transfer
        </p>

        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>Amount</small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
            {props.balanceTransfer}
          </p>
        </div>
        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>
            Balance Left
          </small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
            Rp {balanceLeft.toLocaleString("id-ID")}
          </p>
        </div>
        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>
            Date & Time
          </small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>{d}</p>
        </div>
        {props.Notes ? (
          <div className={`${Styles.group}`}>
            <small className={`${Styles.transfer__transfer__name}`}>
              Notes
            </small>
            <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
              {props.Notes}
            </p>
          </div>
        ) : (
          ""
        )}

        <div className="d-flex justify-content-end mt-4 mb-3">
          <button
            className={`btn btn-primary text-white ${Styles.btn}`}
            onClick={handleShow}
          >
            Confirm
          </button>
        </div>
      </div>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body className={`${Styles.modal__border}`}>
            <div
              className="d-flex justify-content-between
"
            >
              <p className={`${Styles.modal__title}`}>Enter PIN to Transfer</p>
              <button
                className={`btn text-white ${Styles.btn_close} `}
                onClick={handleClose}
              >
                X
              </button>
            </div>
            <p className={`${Styles.transfer__transfer__name} mb-5`}>
              Enter your 6 digits PIN for confirmation to <br /> continue
              transferring money.
            </p>
            <div style={inputContainer}>
              <div className="row">
                <div className="col-2">
                  <input
                    className="input__pin style__pin"
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="1"
                    value={pin.pin1}
                    id="pin-1"
                  />
                </div>
                <div className="col-2">
                  <input
                    className="input__pin style__pin"
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="2"
                    value={pin.pin2}
                    id="pin-2"
                  />
                </div>
                <div className="col-2">
                  <input
                    className="input__pin style__pin"
                    maxLength="1"
                    required
                    onChange={(event) => addPin(event)}
                    name="3"
                    value={pin.pin3}
                    id="pin-3"
                  />
                </div>
                <div className="col-2">
                  <input
                    className="input__pin style__pin"
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="4"
                    value={pin.pin4}
                    id="pin-4"
                  />
                </div>
                <div className="col-2">
                  <input
                    className="input__pin style__pin"
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="5"
                    value={pin.pin5}
                    id="pin-5"
                  />
                </div>
                <div className="col-2">
                  <input
                    className="input__pin style__pin"
                    maxLength="1"
                    onChange={(event) => addPin(event)}
                    name="6"
                    value={pin.pin6}
                    id="pin-6"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              {isLoading ? (
                <BtnLoading />
              ) : (
                <button
                  className={`btn ${
                    isNull ? "btn-secondary" : "btn-primary"
                  } auth__btn p-2 font-light mt-5`}
                  onClick={isNull ? null : handleSubmit}
                >
                  Continue
                </button>
              )}
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}
