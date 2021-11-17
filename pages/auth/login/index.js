import React, { useState } from "react";
import Image from "next/image";
import { connect } from "react-redux";
import { loginUser } from "stores/action/auth";
import { getDataCookie } from "middleware/authorizationPage";
import Cookie from "js-cookie";
import Leftbar from "components/module/auth/sidebar";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (dataCookie.isLogin) {
    // return {
    //   redirect: {
    //     destination: "/main/home",
    //     permanent: false,
    //   },
    // };
  }
  return { props: {} };
}

const Login = (props) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props
      .loginUser(form)
      .then((res) => {
        localStorage.setItem("token", res.value.data.data.token);
        Cookie.set("token", res.value.data.data.token);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div className="row p-0 m-0">
      <Leftbar />
      <div className="col-md-4 bg__right__side">
        <h5 className="bg__form__title mb-3">
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </h5>
        <p className="bg__form__desc mb-5">
          Transfering money is eassier than ever, you can access Zwallet
          wherever you are.
        </p>
        <form action="" className="auth__input" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text auth__input__span">
              <img src="/icon/mail.svg" alt="" />
            </span>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={handleChange}
              placeholder="Input Your Mail"
            />
          </div>
          <div className="input-group mb-3 mt-5">
            <span className="input-group-text auth__input__span">
              <img src="/icon/lock.svg" alt="" />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <p className="text-end auth__text mb-4">
            <a href="" style={{ color: "#3A3D42CC" }}>
              Forgot password?
            </a>
          </p>
          {console.log(props.auth)}
          <button className="btn btn-primary auth__btn p-2 font-light">
            {props.auth.isLoading
              ? `<>
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </>`
              : "Login"}
          </button>
          <p className="text-center mt-3 auth__text">
            Don’t have an account? Let’s{" "}
            <a href="" style={{ color: "#3A3D42CC" }}>
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};
const mapDispatchToProps = { loginUser };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
