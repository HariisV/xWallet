import React from "react";
import ListUser from "components/layout/list-user/user-transfer";
import Styles from "styles/Transfer.module.css";

export default function Transfer(props) {
  const handlePress = (evt) => {
    const theEvent = evt || window.event;
    let key;
    // Handle paste
    if (theEvent.type === "paste") {
      key = event.clipboardData.getData("text/plain");
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
      Number(e.target.value.replace(/[^0-9]/g, ""))
        .toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })
        .replace(/,(.*)/g, "")
    );
  };
  let saldoUser = `${props.saldoUser}`.replace(/,(.*)/g, "");
  let totalTransfer = `${props.balanceTransfer}`.replace(/[^0-9]/g, "");
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
        <p className={`${Styles.transfer__text}`}>
          Type the amount you want to transfer and then <br /> press continue to
          the next steps.
        </p>
        <input
          type="text"
          className={`form-control p-3 w-100 ${Styles.input__nominal}`}
          onKeyPress={handlePress}
          onChange={handleChange}
          value={props.balanceTransfer}
          maxLength={11}
        />
        <p className={`text-center ${Styles.total__available}`}>
          Rp {props.saldoUser.toLocaleString("id-ID")} Available
        </p>
        <div className="d-flex justify-content-center">
          <div className="input-group mb-3 mt-5 inMobile__width">
            <span className="input-group-text auth__input__span">
              <img src="/icon/edit.svg" alt="" />
            </span>
            <input
              type="text"
              className="form-control auth__input__span"
              placeholder="Add some notes"
              name="password"
              onChange={(e) => {
                props.setNotes(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-4 mb-3">
          {totalTransfer.length < 4 ? (
            <a className="btn btn-secondary btnnn p-3">
              Minimal Transfer 1000 !
            </a>
          ) : Number(saldoUser) >= Number(totalTransfer) ? (
            <button
              className="btn btn-primary btnnn text-white"
              onClick={() => props.handleNext("confirm")}
            >
              Confirm
            </button>
          ) : (
            <a className="btn btn-secondary btnnn p-3">Saldo Kamu Kurang !</a>
          )}
        </div>
      </div>
    </div>
  );
}
