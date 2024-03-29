import React, { useState, useEffect } from 'react';
import Layout from 'components/layout';
import Navbar from 'components/basic/Navbar';
import axios from 'utils/axios';
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
}
export default function Profile(props) {
  //
  return (
    <Layout title="Profile">
      <Navbar />
      <h1>Home Page</h1>
      {props.data.map((item) => (
        <>
          <h3>{item.firstName}</h3>
        </>
      ))}
    </Layout>
  );
}

// Client Side Rendering
// export default function Profile() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     getDataUser();
//   }, []);

//   const getDataUser = () => {
//     axios
//       .get("/user?page=1&limit=2&search=&sort=")
//       .then((res) => {
//
//       })
//       .catch((err) => {
//
//       });
//   };
//   return (
//     <Layout title="Profile">
//       <Navbar />
//       <h1>Home Page</h1>
//     </Layout>
//   );
// }
