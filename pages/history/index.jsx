import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Layout from "components/layout";
import Navbar from "components/layout/navbar";
import Footer from "components/layout/footer";
import Sidebar from "components/layout/sidebar";
import Styles from "styles/History.module.css";
import UserHistory from "components/module/list-user/user-history";

export default function History() {
  return (
    <Layout title="History Transfer | xWallet - Send your money without fee">
      <div className="" style={{ background: "rgb(99 121 244 / 4%)" }}>
        <Navbar />
        <section className="sidebar mt-5">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className={`col-md-8`}>
                <div className="card card__shadow ">
                  <div className="card-body  mx-3">
                    <div className="d-flex justify-content-lg-between mt-3">
                      <p className="card__title">Transaction History</p>
                      <select
                        className={`form-select ${Styles.input__sort} text-center mb-4`}
                        aria-label="Disabled select example"
                      >
                        <option selected disabled>
                          Select Filter
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <UserHistory />
                    <UserHistory />
                    <UserHistory />
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
