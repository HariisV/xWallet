import Image from "next/image";
import Styles from "components/reusable/sidebar/sidebar.module.css";
// import Topup from "public/icon/topup.svg";
import Dashboard from "components/Icon/dashboard";
import Transfer from "components/Icon/transfer";
import Topup from "components/Icon/topup";
import Profile from "components/Icon/profile";
export default function sidebar() {
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

              <p className="">Topup</p>
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
    </>
  );
}
