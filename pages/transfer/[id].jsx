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
                    <p className="card__title">Transfer Money</p>
                    <ListUser />
                    <p className={`${Styles.transfer__text}`}>
                      Type the amount you want to transfer and then <br /> press
                      continue to the next steps.
                    </p>
                    <input
                      type="number"
                      className={`form-control p-3 w-100 ${Styles.input__nominal}`}
                      placeholder="0.00"
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
                      <button className="btn btn-primary text-white">
                        Confirm
                      </button>
                    </div>
                    {/* 
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
                    <ListUser /> */}
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
