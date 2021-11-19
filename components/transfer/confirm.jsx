import React, { useState } from "react";
import ListUser from "components/module/list-user/user-transfer";
import Styles from "styles/Transfer.module.css";
import Modal from "react-bootstrap/Modal";
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

export default function Confirm(props) {
  const [show, setShow] = useState(false);
  const [pin, setPin] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        Notify("Successfully Create Pin !", 200);
        setTimeout(() => {
          setIsSuccess(true);
        }, 2000);
        setTimeout(() => {
          router.push("/");
        }, 4000);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div>
      <div className="card-body  mx-3">
        <p className="card__title">Transfer Money</p>
        <ListUser />
        <p className={`${Styles.transfer__transfer__title}`}>
          Details Transfer
        </p>

        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>Amount</small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
            Rp100.000
          </p>
        </div>
        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>
            Balance Left
          </small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
            Rp20.000
          </p>
        </div>
        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>
            Date & Time
          </small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
            May 11, 2020 - 12.20
          </p>
        </div>
        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>Notes</small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
            For buying some socks
          </p>
        </div>

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
            <div className="d-flex justify-content-end">
              <button
                className={`btn btn-primary text-white ${Styles.btn} mt-5 `}
                onClick={handleShow}
              >
                Confirm
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}
