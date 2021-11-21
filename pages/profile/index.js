import React, { useState } from "react";
import Layout from "components/layout";
import Navbar from "components/layout/navbar";
import Footer from "components/layout/footer";
import Sidebar from "components/layout/sidebar";
import PersonalInfo from "components/profile/personal-info";
import Index from "components/profile";
import ManagePassword from "components/profile/manage-password";
import ManagePin from "components/profile/manage-pin";
import CheckPin from "components/profile/check-pin";
import ManagePhone from "components/profile/manage-phone";
import { connect } from "react-redux";
import { getUserLogin } from "stores/action/auth";

const Profile = (props) => {
  const [isShow, setIsShow] = useState("Index");
  const onChangePage = (data) => {
    setIsShow(data);
  };
  const userLogin = props.auth.userLogin;
  return (
    <Layout title="Transfer Money | xWallet - Send your money without fee">
      <div className="" style={{ background: "rgb(99 121 244 / 4%)" }}>
        <Navbar />
        <section className="sidebar mt-5">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className={`col-md-9`}>
                {isShow == "Index" ? (
                  <Index
                    changePage={onChangePage}
                    data={userLogin}
                    dispatch={props.getUserLogin}
                  />
                ) : isShow == "personalInfo" ? (
                  <PersonalInfo
                    changePage={onChangePage}
                    data={userLogin}
                    dispatch={props.getUserLogin}
                  />
                ) : isShow == "ManagePassword" ? (
                  <ManagePassword
                    data={userLogin}
                    changePage={onChangePage}
                    dispatch={props.getUserLogin}
                  />
                ) : isShow == "ManagePin" ? (
                  <ManagePin changePage={onChangePage} data={userLogin} />
                ) : isShow == "CheckPin" ? (
                  <CheckPin changePage={onChangePage} />
                ) : isShow == "ManagePhone" ? (
                  <ManagePhone
                    data={userLogin}
                    changePage={onChangePage}
                    dispatch={props.getUserLogin}
                  />
                ) : (
                  <Index changePage={onChangePage} />
                )}
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
const mapDispatchToProps = { getUserLogin };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
