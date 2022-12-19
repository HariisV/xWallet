import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Input from 'components/auth/input';
import axios from 'utils/axios';
import { Notify, ContainerToast } from 'components/layout/notify';
import Link from 'next/link';
import Leftbar from 'components/auth/sidebar';
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
const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState({});
  const [isNull, setIsNull] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const setData = {
      keysChangePassword: id,
      newPassword: form.newPassword,
      confirmPassword: form.confirmPassword,
    };
    axios
      .patch('/auth/reset-password', setData)
      .then((res) => {
        Notify('Berhasil Reset Password, Silahkan Login Sekarang!', 200);
        setTimeout(() => {
          router.push('/auth/login');
        }, 2000);
      })
      .catch((err) => {
        Notify(err.response.data.msg, 400);

        setTimeout(() => {
          router.push('/auth/forgot-password');
        }, 2000);
      });
  };
  const handleChange = (e) => {
    //

    setForm({ ...form, [e.target.name]: e.target.value });
    if (form.newPassword && form.confirmPassword) {
      setIsNull(false);
    } else {
      setIsNull(true);
    }
  };
  return (
    <Layout title="Forgot Password | xWallet - Send your money without fee">
      <div className="row p-0 m-0">
        <ContainerToast />
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
            <Input
              placeholder="Create New Password"
              icon="/icon/lock.svg"
              type="password"
              name="newPassword"
              onChanges={handleChange}
            />
            <Input
              placeholder="Confirm Your New Password"
              icon="/icon/lock.svg"
              type="password"
              name="confirmPassword"
              onChanges={handleChange}
            />
            <p className="text-end auth__text mb-4 mt-3">
              <Link href="/auth/forgot-password">Forgot password?</Link>
            </p>
            {isNull ? (
              <a className="btn btn-secondary auth__btn p-2 font-light">
                Login
              </a>
            ) : (
              <button className="btn btn-primary auth__btn p-2 font-light">
                Confirm
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
export default Post;
