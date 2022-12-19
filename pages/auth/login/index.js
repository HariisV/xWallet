import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser, getUserLogin } from 'stores/action/auth';
import Cookie from 'js-cookie';
import Leftbar from 'components/auth/sidebar';
import { useRouter } from 'next/router';
import { Notify, ContainerToast } from 'components/layout/notify';
import Link from 'next/link';
import Layout from 'components/layout';

import { getDataCookie } from 'middleware/authorizationPage';
export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (dataCookie.isLogin) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }
  return { props: {} };
}
const initialState = {
  email: '',
  password: '',
};
const Login = (props) => {
  const [isLoading, setIsloading] = useState(false);
  const [isNull, setIsNull] = useState(true);
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [isError, setIsError] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (form.email && form.password) {
      setIsNull(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    props
      .loginUser(form)
      .then((res) => {
        localStorage.setItem('token', res.value.data.data.token);
        Cookie.set('token', res.value.data.data.token);
        props.getUserLogin(res.value.data.data.id);
        Notify('Login Berhasil !', 200);

        if (res.value.data.data.pin === null) {
          Notify('Please Set Your Pin !', 400);
          setTimeout(() => {
            router.push('/auth/pin');
          }, 2000);
        } else {
          setTimeout(() => {
            router.push('/');
          }, 1000);
        }
      })
      .catch((err) => {
        Notify(err.response.data.msg, 400);
        setIsError(true);
        //
      })
      .finally(() => {
        setTimeout(() => {
          setIsloading(false);
          setForm(initialState);
        }, 500);
      });
  };
  return (
    <Layout title="History | xWallet - Send your money without fee">
      <div className="row p-0 m-0">
        <Leftbar />
        <div className="col-md-4 bg__right__side">
          <h5 className="bg__form__title mb-3">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
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
              <ContainerToast />

              <input
                type="text"
                className={`form-control ${isError ? 'is-invalid' : ''}`}
                name="email"
                value={form.email}
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
                className={`form-control  ${isError ? 'is-invalid' : ''}`}
                placeholder="Enter Your Password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <p className="text-end auth__text mb-4">
              <Link href="/auth/forgot-password">Forgot password?</Link>
            </p>
            {isNull ? (
              <a className="btn btn-secondary auth__btn p-2 font-light">
                Login
              </a>
            ) : (
              <button className="btn btn-primary auth__btn p-2 font-light">
                {isLoading ? (
                  <>
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </>
                ) : (
                  'Login'
                )}
              </button>
            )}

            <p className="text-center mt-3 auth__text">
              Don’t have an account? Let’s{' '}
              <Link href="/auth/register" style={{ color: '#3A3D42CC' }}>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};
const mapDispatchToProps = { loginUser, getUserLogin };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
