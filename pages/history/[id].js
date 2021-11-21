import React, { useState, useEffect } from "react";
import Layout from "components/layout";
import Navbar from "components/layout/navbar";
import Footer from "components/layout/footer";
import Sidebar from "components/layout/sidebar";
import Finish from "components/history/finish";
import axios from "utils/axios";
import { useRouter } from "next/router";
import { connect } from "react-redux";

const History = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [dataHistory, setDataHistory] = useState({});
  useEffect(() => {
    getHistoryById();
  }, [id]);
  const getHistoryById = () => {
    axios
      .get(`/transaction/history/${id}`)
      .then((res) => {
        setDataHistory(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  let d = new Date(dataHistory.createdAt);
  d = `${d.toLocaleDateString("id-ID", {
    weekday: "long",
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  })}`;
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
                  <Finish
                    amount={dataHistory.amount}
                    name={`${dataHistory.firstName} ${dataHistory.lastName}`}
                    image={dataHistory.image}
                    date={d}
                    id={id}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(History);
