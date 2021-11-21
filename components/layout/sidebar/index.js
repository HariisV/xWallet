import React, { useState } from "react";
import Image from "next/image";
import Styles from "components/layout/sidebar/sidebar.module.css";
import Dashboard from "components/Icon/dashboard";
import Transfer from "components/Icon/transfer";
import Topup from "components/Icon/topup";
import Profile from "components/Icon/profile";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import ModalTopup from "components/topup";
import { ContainerToast } from "components/layout/notify";

export default function Sidebar() {
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

  return (
    <>
      <div className="col-md-3 col-sm-1  sembunyikan">
        <div className={`card card-body bg-white ${Styles.card__border}`}>
          <ContainerToast />
          <ul className={`${Styles.sidebar__list} m-4`}>
            <li className="mt-4 ">
              <Dashboard stroke="#6379f4" />
              <Link href="/dashboard" passHref>
                <a>Dashboard</a>
              </Link>
            </li>
            <li className="mt-4">
              <Transfer stroke="#6379f4" />
              <Link href="/transfer" passHref>
                <a>Transfer</a>
              </Link>
            </li>
            <li className="mt-4">
              <Topup stroke="#6379f4" />
              <p className="pointer" onClick={handleShowTopup}>
                Topup
              </p>
              <ModalTopup
                showModal={showModal}
                setShowModal={setShowModal}
                balance={balance}
                setBalance={setBalance}
                handleCloseTopup={handleCloseTopup}
              />
            </li>
            <li className="mt-4">
              <Profile stroke="#6379f4" />
              <Link href="/profile" passHref>
                <a>Profile</a>
              </Link>
            </li>
            <li className={`${Styles.logout}`}>
              <Image
                src="/icon/logout.svg"
                width={28}
                height={28}
                className="align-self-center"
                alt=""
              />
              <p className="pointer" onClick={handleLogout}>
                Logout
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
