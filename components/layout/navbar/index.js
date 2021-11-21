import React, { useState } from "react";
import Image from "next/image";
import Styles from "components/layout/navbar/navbar.module.css";
import Link from "next/link";
import { connect } from "react-redux";
import Dashboard from "components/Icon/dashboard";
import Transfer from "components/Icon/transfer";
import Topup from "components/Icon/topup";
import Profile from "components/Icon/profile";
import ModalTopup from "components/topup";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
// import { useRouter } from "next/router";

const Navbar = (props) => {
  const data = props.auth.userLogin;
  const [showModal, setShowModal] = useState(false);
  const handleCloseTopup = () => setShowModal(false);
  const handleShowTopup = () => setShowModal(true);
  const [balance, setBalance] = useState("");
  const router = useRouter();
  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove("token", { path: "" });
    router.push("/auth/login");
  };
  // console.log();
  return (
    <>
      <div className={`${Styles.shadow} bg-white`}>
        <div className={`container ${Styles.navbar}`}>
          <div className="d-flex justify-content-between">
            <div style={{ cursor: "pointer", padding: 0, margin: 0 }}>
              <Link href="/" alt="" passHref>
                <Image
                  src="/icon/logo.svg"
                  width="100px"
                  height="100px"
                  alt="logo"
                  className="align-self-center"
                />
              </Link>
            </div>

            <div className={`${Styles.navbar__right} d-flex`}>
              <img
                src={
                  data.image
                    ? `${process.env.URL_BACKEND}/uploads/${data.image}`
                    : "/image/avatard.png"
                }
                className={`d-content ${Styles.navbar__image}`}
                alt=""
              />
              <div className={`d-block ${Styles.navbar__user}`}>
                <p className={`${Styles.navbar__user__name}`}>
                  {data.firstName + data.lastName}
                </p>
                <small className={`${Styles.navbar__user__phone}`}>
                  {data.noTelp ? data.noTelp : "+62 xxxx xxxx xxxx"}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${Styles.shadow} bg-primary nav__mobile`}>
        <ul className="list-group list-group-horizontal">
          <li className="mx-4 mt-3">
            <div className="text-center">
              <div className="d-flex justify-content-center">
                <Dashboard stroke="#fff" />
              </div>
              <Link href="/dashboard" passHref>
                <a className="text-white text-center">Dashboard</a>
              </Link>
            </div>
          </li>
          <li className="mx-4 mt-3">
            <div className="text-center">
              <div className="d-flex justify-content-center">
                <Transfer stroke="#fff" />
              </div>
              <Link href="/transfer" passHref>
                <a className="text-white text-center">Transfer</a>
              </Link>
            </div>
          </li>
          <li className="mx-4 mt-3">
            <div className="text-center">
              <div className="d-flex justify-content-center">
                <Topup stroke="#fff" />
              </div>
              <p
                className="pointer text-white text-center"
                onClick={handleShowTopup}
              >
                Topup
              </p>
              <ModalTopup
                showModal={showModal}
                setShowModal={setShowModal}
                balance={balance}
                setBalance={setBalance}
                handleCloseTopup={handleCloseTopup}
              />
            </div>
          </li>
          <li className="mx-4 mt-3">
            <div className="text-center">
              <div className="d-flex justify-content-center">
                <Profile stroke="#fff" />
              </div>
              <Link href="/profile" passHref>
                <a className="text-white text-center">Profile</a>
              </Link>
            </div>
          </li>
          <li className="mx-4 mt-3">
            <div className="text-center">
              <div className="d-flex justify-content-center">
                <Image
                  src="/icon/logout.svg"
                  width={28}
                  height={28}
                  className="align-self-center"
                  alt=""
                />
              </div>
              <p
                className="pointer text-white text-center"
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(Navbar);
