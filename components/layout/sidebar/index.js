import React, { useState } from "react";
import Image from "next/image";
import Styles from "components/layout/sidebar/sidebar.module.css";
import Modal from "react-bootstrap/Modal";
import Dashboard from "components/Icon/dashboard";
import Transfer from "components/Icon/transfer";
import Topup from "components/Icon/topup";
import Profile from "components/Icon/profile";

export default function Sidebar() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseTopup = () => setShowModal(false);
  const handleShowTopup = () => setShowModal(true);

  return (
    <>
      <div className="col-md-3">
        <div className={`card card-body bg-white ${Styles.card__border}`}>
          <ul className={`${Styles.sidebar__list} `}>
            <li className="">
              <Dashboard stroke="#6379f4" />
              <p>Dashboard</p>
            </li>
            <li className="">
              <Transfer stroke="#6379f4" />
              <p>Transfer</p>
            </li>
            <li className="">
              <Topup stroke="#6379f4" />

              <div className="">
                <button onClick={handleShowTopup}>Topup</button>
              </div>
            </li>
            <li className="">
              <Profile stroke="#6379f4" />

              <p>Profile</p>
            </li>
            <li className={`${Styles.logout}`}>
              <Image
                src="/icon/logout.svg"
                width={28}
                height={28}
                className="align-self-center"
                alt=""
              />
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseTopup}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className={`${Styles.modal__border}`}>
          <div
            className="d-flex justify-content-between
"
          >
            <p className={`${Styles.modal__title} p-0 m-0`}>Topup</p>
            <button
              className={`btn text-white ${Styles.btn_close} `}
              onClick={handleCloseTopup}
            >
              X
            </button>
          </div>
          <p className={`${Styles.transfer__transfer__name} mb-5`}>
            Enter the amount of money, and <br />
            click submit
          </p>
          <input
            type="text"
            className={`form-control p-3 w-100 ${Styles.input__nominal}`}
            maxLength="9"
            // value={props.nominal}
            // onChange={(e) => props.onChange(e.target.value)}
          />

          <div className="d-flex justify-content-end">
            <button
              className={`btn btn-primary text-white ${Styles.btn} mt-5 `}
              onClick={handleShowTopup}
            >
              Submit
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
