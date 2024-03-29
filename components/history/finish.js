import React from 'react';
import ListUser from 'components/layout/list-user/user-transfer';
import Styles from 'styles/Transfer.module.css';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import axios from 'utils/axios';

const inputStyle = {
  width: '50px',
  height: '65px',
  background: '#FFFFFF',
  border: '1px solid rgba(169, 169, 169, 0.6)',
  boxSizing: 'border-box',
  boxShadow: '0px 10px 75px rgba(147, 147, 147, 0.1)',
  borderRadius: '10px',
};

const inputContainer = {
  width: '100%',
};

export default function Confirm(props) {
  const handleClick = () => {
    axios
      .get(`export/transaction/${props.id}`)
      .then((res) => {
        window.open(res.data.data.url, '_blank');
      })
      .catch((err) => {});
  };
  return (
    <div>
      <div className="card-body  mx-3">
        <div className=" bg__right__side text-center ">
          {props.status == 'success' ? (
            <img src="/image/success.png" alt="" width="80px" />
          ) : (
            <img src="/image/pending.jpg" alt="" width="80px" />
          )}
          <h5 className="bg__form__title mb-3 mt-3">
            {props.type == 'accept'
              ? 'Accept'
              : props.type == 'send'
              ? 'Transfer'
              : props.type == 'topup'
              ? 'Topup'
              : ''}{' '}
            {props.status == 'pending' ? 'Pending' : 'Success'}
          </h5>
        </div>
        <p className={`${Styles.transfer__transfer__text}`}>
          Details{' '}
          {props.type == 'accept'
            ? 'Accept'
            : props.type == 'send'
            ? 'Transfer'
            : props.type == 'topup'
            ? 'Topup'
            : ''}
        </p>

        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>Amount</small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
            Rp {props.amount ? props.amount.toLocaleString('id-ID') : ''}
          </p>
        </div>

        <div className={`${Styles.group}`}>
          <small className={`${Styles.transfer__transfer__name}`}>
            Date & Time
          </small>
          <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
            {props.date}
          </p>
        </div>
        {props.notes ? (
          <div className={`${Styles.group}`}>
            <small className={`${Styles.transfer__transfer__name}`}>
              Notes
            </small>
            <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
              {props.notes}
            </p>
          </div>
        ) : (
          <div className={`${Styles.group}`}>
            <small className={`${Styles.transfer__transfer__name}`}>
              Status
            </small>
            <p className={`${Styles.transfer__transfer__value} p-0 m-0`}>
              {props.status == 'pending' ? 'Pending' : 'Success'}
            </p>
          </div>
        )}

        {props.type === 'topup' ? (
          ''
        ) : (
          <>
            {' '}
            <p className={`${Styles.transfer__transfer__text}`}>
              Transfer {props.type == 'send' ? 'To' : 'By'}
            </p>
            <ListUser
              name={props.name}
              noTelp={props.noTelp}
              image={props.image}
            />
          </>
        )}
        <div className="d-flex justify-content-end mt-4 mb-3">
          {props.type !== 'topup' ? (
            <button
              className={`btn btn-outline-primary  ${Styles.btn} mx-5`}
              onClick={handleClick}
            >
              <img src="/icon/download.svg" alt="download" className="mx-2" />
              Download PDF
            </button>
          ) : (
            ''
          )}

          <Link href="/dashboard" passHref>
            <button className={`btn btn-primary text-white ${Styles.btn}`}>
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
