/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Navbar from 'components/layout/navbar';
import Footer from 'components/layout/footer';
import Sidebar from 'components/layout/sidebar';
import Layout from 'components/layout';
import Styles from 'styles/Home.module.css';
import ListUser from 'components/layout/list-user/user-home';
import { connect } from 'react-redux';
import { getUserLogin } from 'stores/action/auth';
import { getHistory } from 'stores/action/history';
import ModalTopup from 'components/topup';
import Link from 'next/link';
import axios from 'utils/axios';
import { Bar } from 'react-chartjs-2';
import { getDataCookie } from 'middleware/authorizationPage';

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (!dataCookie.isLogin) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  return { props: {} };
}
const Dashboard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseTopup = () => setShowModal(false);
  const handleShowTopup = () => setShowModal(true);
  const [dataChart, setDataChart] = useState({});
  const [balance, setBalance] = useState('');
  const data = props.auth.userLogin;

  useEffect(() => {
    props.getUserLogin(props.auth.userLogin.id);
    props.getHistory('page=1&limit=3&filter=MONTH');
    getDashboard();
  }, []);
  const getDashboard = () => {
    axios.get(`/dashboard/${data.id}`).then((res) => {
      setDataChart(res.data.data);
      //
    });
  };
  const dataChartSend = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Income',
        data: dataChart.listExpense
          ? dataChart.listIncome.map((e) => `${e.total}`)
          : null,
        backgroundColor: '#6379F4',
      },
      {
        label: 'Expense',
        data: dataChart.listExpense
          ? dataChart.listExpense.map((e) => `${e.total}`)
          : null,
        backgroundColor: '#ff5b37',
      },
    ],
  };
  dataChart.listExpense
    ? dataChart.listExpense.map((e) => console.log(e.total))
    : null;

  const options = {
    scales: {
      y: {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        stacked: true,
      },
    },
  };

  return (
    <Layout title="xWallet - Send your money without fee">
      <div className="" style={{ background: 'rgb(99 121 244 / 4%)' }}>
        <Navbar />
        <section className="sidebar mt-5">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className="col-md-9 col-sm-12">
                <div className="card card__primary">
                  <div className="card-body">
                    <div
                      className="p-3 p__card_dashboard"
                      // style={{ float: "right" }}
                    >
                      <Link href="/transfer">
                        <a className="btn btn-outline-light btn__sm_mobile p-2">
                          <img
                            src="/image/arrow-up.png"
                            width="28px"
                            height="28px"
                            alt=""
                          />
                          Transfers
                        </a>
                      </Link>
                      <button
                        className="btn btn-outline-light btn__sm_mobile mt-3 p-2"
                        width="28px"
                        height="28px"
                        onClick={handleShowTopup}
                      >
                        <img src="/image/plus.png" alt="" /> Top Up
                      </button>
                      <ModalTopup
                        showModal={showModal}
                        setShowModal={setShowModal}
                        balance={balance}
                        setBalance={setBalance}
                        handleCloseTopup={handleCloseTopup}
                      />
                    </div>
                    <p className={`${Styles.balance}`}>Balance</p>
                    <h3 className={`${Styles.total}`}>
                      Rp {data.balance.toLocaleString('id-ID')}
                    </h3>
                    <p className={`${Styles.phone}`}>
                      {data.noTelp
                        ? data.noTelp
                        : 'Kamu belum menambahkan telepon'}
                    </p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="card card-body card__shadow h-100">
                      <div className="d-flex justify-content-between dashboard_text mb-3">
                        <div className="">
                          <img src="/icon/income.svg" alt="" />
                          <br />
                          <small>Income</small>
                          <h5>
                            Rp{' '}
                            {dataChart.totalIncome
                              ? dataChart.totalIncome.toLocaleString('id-ID')
                              : 0}
                          </h5>
                        </div>
                        <div className="">
                          <img src="/icon/expense.svg" alt="" /> <br />
                          <small>Expense</small>
                          <h5>
                            Rp{' '}
                            {dataChart.totalExpense
                              ? dataChart.totalExpense.toLocaleString('id-ID')
                              : 0}
                          </h5>
                        </div>
                      </div>
                      <Bar
                        data={dataChartSend}
                        circular={true}
                        options={options}
                      />{' '}
                    </div>
                  </div>
                  <div className="col-md-6 sembunyikan">
                    <div className="card card-body card__shadow">
                      <div className="d-flex justify-content-lg-between">
                        <p className="card__title">Transaction History</p>
                        <small className={`${Styles.transaction__desc} mt-1`}>
                          <Link href="/history">See All</Link>
                        </small>
                      </div>
                      {console.log(props.history.data.length > 1)}
                      {!props.history.data.length
                        ? null
                        : props.history.data.map((e, i) => (
                            <ListUser
                              key={i}
                              name={e.fullName}
                              type={e.type}
                              status={e.status}
                              image={e.image}
                              total={e.amount}
                            />
                          ))}
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
};
const mapStateToProps = (state) => {
  return { auth: state.auth, history: state.history };
};
const mapDispatchToProps = { getUserLogin, getHistory };
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
