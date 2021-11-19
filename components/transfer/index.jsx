import React from "react";
import ListUser from "components/module/list-user/user-transfer";
import Styles from "styles/Transfer.module.css";

export default function transfer(props) {
  return (
    <div>
      <div className="card-body  mx-3">
        <p className="card__title">Transfer Money</p>
        <ListUser />
        <p className={`${Styles.transfer__text}`}>
          Type the amount you want to transfer and then <br /> press continue to
          the next steps.
        </p>
        <input
          type="text"
          className={`form-control p-3 w-100 ${Styles.input__nominal}`}
          maxLength="9"
          value={props.nominal}
          onChange={(e) => props.onChange(e.target.value)}
        />
        <p className={`text-center ${Styles.total__available}`}>
          Rp120.000 Available
        </p>
        <div className="d-flex justify-content-center">
          <div className="input-group mb-3 mt-5 w-50">
            <span className="input-group-text auth__input__span">
              <img src="/icon/edit.svg" alt="" />
            </span>
            <input
              type="text"
              className="form-control auth__input__span"
              placeholder="Add some notes"
              name="password"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-4 mb-3">
          <button className="btn btn-primary text-white">Confirm</button>
        </div>
      </div>
    </div>
  );
}
