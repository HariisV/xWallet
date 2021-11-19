import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Navbar from "components/layout/navbar";
import Footer from "components/layout/footer";
import Sidebar from "components/layout/sidebar";
import Layout from "components/layout";
import Styles from "styles/Home.module.css";
import ListUser from "components/layout/list-user/user-home";

export default function Home() {
  return (
    <Layout title="xWallet - Send your money without fee">
      <div className="" style={{ background: "rgb(99 121 244 / 4%)" }}>
        <Navbar />
        <section className="sidebar mt-5">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className={`col-md-9`}>
                <div className="card card__primary">
                  <div className="card-body">
                    <div className="float-right p-3" style={{ float: "right" }}>
                      <button className="w-100 btn btn-outline-light p-2">
                        <img
                          src="/image/arrow-up.png"
                          width="28px"
                          height="28px"
                          alt=""
                        />{" "}
                        Transfer
                      </button>
                      <button
                        className="w-100 btn btn-outline-light mt-3 p-2"
                        width="28px"
                        height="28px"
                      >
                        <img src="/image/plus.png" alt="" /> Top Up
                      </button>
                    </div>
                    <p className={`${Styles.balance}`}>Balance</p>
                    <h3 className={`${Styles.total}`}>Rp 120.000</h3>
                    <p className={`${Styles.phone}`}>+62 813-9387-7946</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas hic labore nostrum ipsum, consequatur vitae odit
                    laborum sequi quod quisquam culpa iure quidem repudiandae
                    sed deserunt sit, aliquam officiis nam.
                  </div>
                  <div className="col-md-6">
                    <div className="card card-body card__shadow">
                      <div className="d-flex justify-content-lg-between">
                        <p className="card__title">Transaction History</p>
                        <small className={`${Styles.transaction__desc} mt-1`}>
                          See All
                        </small>
                      </div>
                      <ListUser />
                      <ListUser />
                      <ListUser />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
}
