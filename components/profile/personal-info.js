import React from 'react';
import Image from 'next/image';
import Styles from 'styles/Profile.module.css';

export default function Personalinfo(props) {
  return (
    <div className="card card__shadow ">
      <div className="card-body mx-3">
        <div className="d-flex justify-content-between">
          <p className={`${Styles.title}`}>Personal Information</p>
          <button
            className={`btn text-white  ${Styles.btn_close} `}
            onClick={() => props.changePage('Index')}
          >
            X
          </button>{' '}
        </div>
        <small className={`${Styles.desc}`}>
          We got your personal information from the sign <br /> up proccess. If
          you want to make changes on <br /> your information, contact our
          support.
        </small>
        <div className={` card card-body ${Styles.group} mt-5 card__shadow_xl`}>
          <small className={`${Styles.detail__name}`}>First Name</small>
          <p className={`${Styles.detail__value} p-0 m-0`}>
            {props.data.firstName}
          </p>
        </div>
        <div className={` card card-body ${Styles.group} card__shadow_xl`}>
          <small className={`${Styles.detail__name}`}>Last Name</small>
          <p className={`${Styles.detail__value} p-0 m-0`}>
            {props.data.lastName}
          </p>
        </div>
        <div className={` card card-body ${Styles.group} card__shadow_xl`}>
          <small className={`${Styles.detail__name}`}>Verified E-mail</small>
          <p className={`${Styles.detail__value} p-0 m-0`}>
            {props.data.email}
          </p>
        </div>
        <div className={` card card-body ${Styles.group} card__shadow_xl`}>
          <small className={`${Styles.detail__name}`}>Phone Number</small>
          <div className="d-flex justify-content-between">
            <p className={`${Styles.detail__value} p-0 m-0`}>
              {props.data.noTelp ? props.data.noTelp : 'Belum Ditambahkan'}
            </p>
            <button
              className="btn"
              onClick={() => props.changePage('ManagePhone')}
            >
              Manage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
