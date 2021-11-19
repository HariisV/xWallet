import React, { useState } from "react";
import Layout from "components/layout";
import Navbar from "components/layout/navbar";
import Footer from "components/layout/footer";
import Sidebar from "components/layout/sidebar";
import Styles from "styles/Transfer.module.css";
import ListUser from "components/module/list-user/user-transfer";
import Transfer from "components/transfer/index";
import Confirm from "components/transfer/confirm";
import Finish from "components/transfer/finish";

export default function History() {
  const [nominal, setNominal] = useState(0);
  const [isShow, setIsShow] = useState("confirm");
  const onChange = (val) => {
    // console.log(val);
    // var regex = /[0-9]|\./;
    // if (regex.test(val.key) === true || event.key === "Backspace") {
    //   console.log("MASUK", val.key);
    //   let sebelumnya = nominal + val.key;
    // }
    setNominal(Number(val.replace(/,/g, "")).toLocaleString("us-US"));
  };
  return (
    <Layout title="Transfer Money | xWallet - Send your money without fee">
      <div className="" style={{ background: "rgb(99 121 244 / 4%)" }}>
        <Navbar />
        <section className="sidebar mt-5">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className={`col-md-9`}>
                <div className="card card__shadow ">
                  {isShow == "transfer" ? (
                    <Transfer onChange={onChange} nominal={nominal} />
                  ) : isShow == "confirm" ? (
                    <Confirm />
                  ) : isShow == "finish" ? (
                    <Finish />
                  ) : (
                    isShow == "transfer"
                  )}
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
