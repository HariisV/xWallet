import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Layout from "components/Layout";
import Navbar from "components/reusable/navbar";
import Footer from "components/reusable/footer";
import Sidebar from "components/reusable/sidebar";
import Styles from "styles/Transfer.module.css";
import ListUser from "components/module/list-user/user-transfer";

export default function History() {
  return (
    <Layout title="History Transfer | xWallet - Send your money without fee">
      <div className="" style={{ background: "rgb(99 121 244 / 4%)" }}>
        <Navbar />
        <section className="sidebar mt-5">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className={`col-md-9`}>
                <div className="card card__shadow ">
                  <div className="card-body  mx-3">
                    <p className="card__title">Search Receiver</p>

                    <div className="input-group mb-3">
                      <span
                        className={`input-group-text ${Styles.input__icon} `}
                      >
                        <img src="/icon/search.svg" alt="" />
                      </span>
                      <input
                        type="text"
                        className={`${Styles.input__filter} form-control `}
                        name="email"
                        placeholder="Input Name & Enter"
                      />
                    </div>
                    <ListUser />
                    <ListUser />
                    <ListUser />
                    <ListUser />
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
