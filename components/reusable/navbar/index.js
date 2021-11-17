import Image from "next/image";
import Styles from "components/reusable/navbar/navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={`${Styles.shadow} bg-white`}>
        <div className={`container ${Styles.navbar}`}>
          <div className="d-flex justify-content-between">
            <Image
              src="/icon/logo.svg"
              width="100px"
              height="100px"
              alt="logo"
              className="align-self-center"
            />
            <div className={`${Styles.navbar__right} d-flex`}>
              <img
                src="/image/user.png"
                className={`d-content ${Styles.navbar__image}`}
                alt=""
              />
              <div className={`d-block ${Styles.navbar__user}`}>
                <p className={`${Styles.navbar__user__name}`}>
                  Robert Chandler
                </p>
                <small className={`${Styles.navbar__user__phone}`}>
                  +62 8139 3877 7946
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
