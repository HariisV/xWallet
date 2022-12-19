import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Styles from 'components/layout/sidebar/sidebar.module.css';
import axios from 'utils/axios';
import { Notify } from 'components/layout/notify';
import BtnNull from 'components/btn/null';
import BtnLoading from 'components/btn/loading';

export default function Topup(props) {
  const [isLoading, setIsLoading] = useState(false);
  const handlePress = (evt) => {
    const theEvent = evt || window.event;
    let key;
    // Handle paste
    if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      // Handle key press
      key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

  const handleChange = (e) => {
    props.setBalance(
      Number(e.target.value.replace(/[^0-9]/g, ''))
        .toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
        })
        .replace(/,(.*)/g, '')
    );
  };
  const submitTopup = () => {
    setIsLoading(true);
    const data = {
      amount: props.balance.replace(/,(.*)/g, '').replace(/[^0-9]/g, ''),
    };

    axios
      .post('/transaction/top-up', data)
      .then((res) => {
        Notify('Berhasil Topup, Bayar Sekarang!', 200);
        setTimeout(() => {
          props.handleCloseTopup();
          props.setBalance(0);
          window.open(res.data.data.redirectUrl, '_blank');
        }, 3000);
      })
      .catch((err) => {})
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  };
  return (
    <div>
      <Modal
        show={props.showModal}
        onHide={props.handleCloseTopup}
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
              onClick={props.handleCloseTopup}
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
            onKeyPress={handlePress}
            onChange={handleChange}
            value={props.balance}
            maxLength={11}
            // max={55}
            // value={props.nominal}
            // onChange={(e) => props.onChange(e.target.value)}
          />

          <div className="d-flex justify-content-end">
            {props.balance.length < 5 ? (
              <BtnNull />
            ) : isLoading ? (
              <BtnLoading />
            ) : (
              <button
                className={`btn btn-primary text-white ${Styles.btn} mt-5 `}
                onClick={submitTopup}
              >
                Submit
              </button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
