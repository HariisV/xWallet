import React, { useState, useEffect } from 'react';
import Layout from 'components/layout';
import Navbar from 'components/layout/navbar';
import Footer from 'components/layout/footer';
import Sidebar from 'components/layout/sidebar';
import Transfer from 'components/transfer/index';
import Confirm from 'components/transfer/confirm';
import axios from 'utils/axios';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

const History = (props) => {
  const dataLogin = props.auth.userLogin;
  const router = useRouter();
  const { id } = router.query;
  const [balance, setBalance] = useState(0);
  const [isShow, setIsShow] = useState('transfer');
  const [DataUser, setDataUser] = useState({});
  const [notes, setNotes] = useState('');

  useEffect(() => {
    getDetailUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  // useEffect(getDetailUser, [id]);

  const getDetailUser = () => {
    axios
      .get(`/user/profile/${id}`)
      .then((res) => {
        setDataUser(res.data.data);
      })
      .catch((err) => {});
  };
  const handleNext = (data) => {
    setIsShow(data);
  };
  return (
    <Layout title="Transfer Money | xWallet - Send your money without fee">
      <div className="" style={{ background: 'rgb(99 121 244 / 4%)' }}>
        <Navbar />
        <section className="sidebar mt-5">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className={`col-md-9`}>
                <div className="card card__shadow ">
                  {isShow == 'transfer' ? (
                    <Transfer
                      setBalance={setBalance}
                      data={DataUser}
                      saldoUser={dataLogin.balance}
                      balanceTransfer={balance}
                      setNotes={setNotes}
                      handleNext={handleNext}
                    />
                  ) : isShow == 'confirm' ? (
                    <Confirm
                      setBalance={setBalance}
                      data={DataUser}
                      saldoUser={dataLogin.balance}
                      balanceTransfer={balance}
                      Notes={notes}
                      receiverId={id}
                      handleNext={handleNext}
                    />
                  ) : (
                    isShow == 'transfer'
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
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(History);
