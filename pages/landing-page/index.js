import React from 'react';
import Link from 'next/link';
import { getDataCookie } from 'middleware/authorizationPage';
import Layout from 'components/layout';
import axios from 'utils/axios';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

// export async function getServerSideProps(context) {
//   const dataCookie = await getDataCookie(context);
//   if (dataCookie.isLogin) {
//     return {
//       redirect: {
//         destination: "/dashboard",
//         permanent: false,
//       },
//     };
//   }
//   return { props: {} };
// }
export async function getStaticProps(context) {
  const response = await await axios
    .get(`user?page=1&limit=5&search=&sort=firstName ASC`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return [];
    });
  return {
    props: { data: response },
  };
}
export default function SSG(props) {
  const router = useRouter();
  const handleDetailProfile = (id) => {
    router.push(`/landing-page/${id}`);
  };

  return (
    <>
      {props.data.map((item, index) => (
        <button onClick={() => handleDetailProfile(item.id)} key={index}>
          <h1>GET NOMOR TELEPON {item.firstName}</h1>
        </button>
      ))}
    </>
    // <Layout title="xWallet - Send your money without fee">
    //   <div style={{ background: "#FAFCFF" }}>
    //     <div className="container">
    //       <nav className="navbar navbar-expand-lg navbar-light m-5">
    //         <div className="container-fluid">
    //           <img src="/icon/logo.svg" alt="" />
    //           <button
    //             className="navbar-toggler"
    //             type="button"
    //             data-bs-toggle="collapse"
    //             data-bs-target="#navbarSupportedContent"
    //             aria-controls="navbarSupportedContent"
    //             aria-expanded="false"
    //             aria-label="Toggle navigation"
    //           >
    //             <span className="navbar-toggler-icon"></span>
    //           </button>
    //           <div
    //             className="collapse navbar-collapse"
    //             id="navbarSupportedContent"
    //           >
    //             <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
    //             <form className="d-flex">
    //               <Link href="/auth/login">
    //                 <a className="btn btn-outline-primary lp__btnn mx-3">
    //                   Login
    //                 </a>
    //               </Link>
    //               <Link href="/auth/register">
    //                 <a className="btn btn-primary lp__btnn text-white">
    //                   Register
    //                 </a>
    //               </Link>
    //             </form>
    //           </div>
    //         </div>
    //       </nav>
    //       <section id="Hero">
    //         <div className="row">
    //           <div className="col-md-5 text-end">
    //             <img src="/image/phone-lp.png" alt="" className="lp__image" />
    //           </div>
    //           <div className="col-md-4 align-self-center lp__hero__center">
    //             <h1 className="lp__title">
    //               Awesome App For Saving{" "}
    //               <span className="lp__color">Time.</span>
    //             </h1>
    //             <p className="lp__desc mt-4 mb-4">
    //               We bring you a mobile app for banking problems that oftenly
    //               wasting much of your times.
    //             </p>
    //             <button className="btn btn-primary lp__btn mb-5">
    //               Try It Free
    //             </button>
    //             <p>Available on</p>
    //             <div className="d-flex availabel">
    //               <img
    //                 src="/image/gplay.png"
    //                 className="lp__available"
    //                 alt=""
    //               />
    //               <img
    //                 src="/image/appstore.png"
    //                 className="lp__available"
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //     <section id="Patner" className="mt-5">
    //       <div className="lp__bgBiru">
    //         <div className="container p-5">
    //           <img
    //             src="/image/patner.png"
    //             className="lp__patner w-100"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //     </section>
    //     <section id="About" className="mt-5">
    //       <div className="container">
    //         <h2 className="text-center lp__title">
    //           <span className="lp__color">About</span> the Application.
    //         </h2>
    //         <p className="mt-4 text-center lp__desc">
    //           We have some great features from the application and it’s totallys
    //           <br />
    //           free to use by all users around the world.
    //         </p>
    //         <div className="row mt-5 d-flex justify-content-center">
    //           <div className="col-md-3 col-sm-12 mt-3">
    //             <div className="card card-body shadow lp__card text-center">
    //               <div className="d-flex justify-content-center">
    //                 <img
    //                   src="/image/phone-ilp.png"
    //                   className="lp__card__icon text-center"
    //                   alt=""
    //                 />
    //               </div>
    //               <h5 className="lp__card__title">24/7 Support</h5>
    //               <p className="lp__card__desc">
    //                 We have 24/7 contact support so you can contact us whenever
    //                 you want and we will respond it.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-md-3 col-sm-12 mt-3">
    //             <div className="card card-body shadow lp__card text-center">
    //               <div className="d-flex justify-content-center">
    //                 <img
    //                   src="/image/lock-ilp.png"
    //                   className="lp__card__icon text-center"
    //                   alt=""
    //                 />
    //               </div>
    //               <h5 className="lp__card__title">Data Privacy</h5>
    //               <p className="lp__card__desc">
    //                 We make sure your data is safe in our database and we will
    //                 encrypt any data you submitted to us.{" "}
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-md-3 col-sm-12 mt-3">
    //             <div className="card card-body shadow lp__card text-center">
    //               <div className="d-flex justify-content-center">
    //                 <img
    //                   src="/image/download-ilp.png"
    //                   className="lp__card__icon text-center"
    //                   alt=""
    //                 />
    //               </div>
    //               <h5 className="lp__card__title">Easy Download</h5>
    //               <p className="lp__card__desc">
    //                 Zwallet is 100% totally free to use it’s now available on
    //                 Google Play Store and App Store.{" "}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section id="Features" className="mt-5 lp__bgBiru p-5">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-md-6">
    //             <img
    //               src="/image/phone.png"
    //               className="lp__image__feature"
    //               alt=""
    //             />
    //           </div>
    //           <div className="col-md-6 align-self-center">
    //             <h2 className="lp__title">All The Great Zwallet Features.</h2>

    //             <div className="card card-body card__feature shadow">
    //               <p className="fw-bold">
    //                 <span className="lp__color ">1.</span> Small Fee
    //               </p>
    //               <small>
    //                 We only charge 5% of every success transaction done in
    //                 Zwallet app.
    //               </small>
    //             </div>
    //             <div className="card card-body card__feature shadow mt-4">
    //               <p className="fw-bold">
    //                 <span className="lp__color ">2.</span> Data Secured
    //               </p>
    //               <small>
    //                 We only charge 5% of every success transaction done in
    //                 Zwallet app.
    //               </small>
    //             </div>
    //             <div className="card card-body card__feature shadow mt-4">
    //               <p className="fw-bold">
    //                 <span className="lp__color ">3.</span> User Friendly
    //               </p>
    //               <small>
    //                 We only charge 5% of every success transaction done in
    //                 Zwallet app.
    //               </small>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section id="Testi">
    //       <div className="container p-5">
    //         <h2 className="lp__title text-center">
    //           What Users are <span className="lp__color">Saying.</span>
    //         </h2>
    //         <p className="lp__desc text-center">
    //           We have some great features from the application and it’s totally
    //           <br /> free to use by all users around the world.
    //         </p>
    //         <div className="row mt-5 d-flex justify-content-center">
    //           {/* d-flex justify-content-center */}
    //           {/* <div className=""> */}
    //           <div className="col-md-4 col-sm-12 mb-5">
    //             <div className="card card-body shadow lp__card text-center">
    //               <div className="d-flex justify-content-center mb-2">
    //                 <img
    //                   src="/image/sherina.png"
    //                   alt=""
    //                   className="lp__card__icon text-center"
    //                 />
    //               </div>
    //               <h5 className="mb-3 fw-bold">Sherina Chaw</h5>
    //               <p>
    //                 “I use this app since 2 years ago and this is the best app
    //                 that I’ve ever use in my entire life”
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-md-4 col-sm-12 mb-5">
    //             <div className="card card-body shadow lp__card text-center">
    //               <div className="d-flex justify-content-center mb-2">
    //                 <img
    //                   src="/image/sherina.png"
    //                   alt=""
    //                   className="lp__card__icon text-center"
    //                 />
    //               </div>
    //               <h5 className="mb-3 fw-bold">Sherina Chaw</h5>
    //               <p>
    //                 “I use this app since 2 years ago and this is the best app
    //                 that I’ve ever use in my entire life”
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-md-4 col-sm-12 mb-5">
    //             <div className="card card-body shadow lp__card text-center">
    //               <div className="d-flex justify-content-center mb-2">
    //                 <img
    //                   src="/image/sherina.png"
    //                   alt=""
    //                   className="lp__card__icon text-center"
    //                 />
    //               </div>
    //               <h5 className="mb-3 fw-bold">Sherina Chaw</h5>
    //               <p>
    //                 “I use this app since 2 years ago and this is the best app
    //                 that I’ve ever use in my entire life”
    //               </p>
    //               {/* </div> */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <footer className="bg-primary lp__footer">
    //       <div className="container p-5">
    //         <img
    //           src="/image/logo.png"
    //           className="mb-5 lp__footer__logo"
    //           alt=""
    //         />
    //         <p className="lp__limitText">
    //           Simplify financial needs and saving much time in banking needs
    //           with one single app.
    //         </p>
    //         <br />
    //         <hr />
    //         <div className="d-flex justify-content-between lp__footer__mobile">
    //           <p>2020 Zwallet. All right reserved.</p>
    //           <p>contact@zwallet.com</p>
    //         </div>
    //       </div>
    //     </footer>
    //   </div>
    // </Layout>
  );
}
