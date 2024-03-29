/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Layout from 'components/layout';
import Navbar from 'components/layout/navbar';
import Footer from 'components/layout/footer';
import Sidebar from 'components/layout/sidebar';
import Finish from 'components/history/finish';
import axios from 'utils/axios';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

const History = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [dataHistory, setDataHistory] = useState({});
  const [user, setUser] = useState({});
  const getHistoryById = () => {
    axios
      .get(`/transaction/history/${id}`)
      .then((res) => {
        setDataHistory(res.data.data);
        getReceiver(
          `${
            res.data.data.types == 'accept'
              ? res.data.data.senderId
              : res.data.data.receiverId
          }`
        );
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getHistoryById();
  }, [id]);
  const getReceiver = (data) => {
    if (data) {
      axios
        .get(`/user/profile/${data}`)
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((err) => {});
    }
  };
  let d = new Date(dataHistory.createdAt);
  d = `${d.toLocaleDateString('id-ID', {
    weekday: 'long',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })}`;
  return (
    <Layout title="History | xWallet - Send your money without fee">
      <div className="" style={{ background: 'rgb(99 121 244 / 4%)' }}>
        <Navbar />
        <section className="sidebar mt-5">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className={`col-md-9`}>
                <div className="card card__shadow ">
                  <Finish
                    date={d}
                    id={id}
                    name={`${user.firstName} ${user.lastName}`}
                    image={user.image}
                    noTelp={user.noTelp}
                    amount={dataHistory.amount}
                    type={dataHistory.types}
                    notes={dataHistory.notes}
                    status={dataHistory.status}
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
