import Image from "next/image";
import Styles from "components/reusable/sidebar/sidebar.module.css";
import Topup from "public/icon/topup.svg";
export default function sidebar() {
  return (
    <>
      <section className={`${Styles.sidebar} mt-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={`card card-body bg-white ${Styles.card__border}`}>
                <ul className={`${Styles.sidebar__list} `}>
                  <li className={`${Styles.active}`}>
                    {/* <Image
                      src="/icon/dashboard.svg"
                      width={28}
                      height={28}
                      alt=""
                    /> */}
                    {/* <img src="/icon/dashboard.svg" alt="" /> */}
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6667 3.5H3.5V11.6667H11.6667V3.5Z"
                        stroke="#3A3D42"
                        strokeOpacity="0.8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.4999 3.5H16.3333V11.6667H24.4999V3.5Z"
                        stroke="#3A3D42"
                        strokeOpacity="0.8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.4999 16.333H16.3333V24.4997H24.4999V16.333Z"
                        stroke="#3A3D42"
                        strokeOpacity="0.8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.6667 16.333H3.5V24.4997H11.6667V16.333Z"
                        stroke="#3A3D42"
                        strokeOpacity="0.8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <p>Dashboard</p>
                  </li>
                  <li className={`${Styles.active}`}>
                    <Image
                      src="/icon/transfer.svg"
                      width={28}
                      height={28}
                      alt=""
                    />
                    <p>Transfer</p>
                  </li>
                  <li className="">
                    <Image
                      src={Topup}
                      className="align-self-center"
                      alt=""
                      style={{ width: "28px", height: "28px" }}
                    />
                    <p className="" style={{ alignItems: "center" }}>
                      Topup
                    </p>
                  </li>
                  <li className="">
                    <Image
                      src="/icon/profile.svg"
                      width={28}
                      height={28}
                      className="align-self-center"
                      alt=""
                    />
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
            <div className={`col-md-8`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              quia soluta possimus ab harum aut autem? Hic, error! Neque harum
              voluptatem nesciunt accusantium atque voluptatibus eos quisquam
              perspiciatis ab ratione!
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
