/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Layout from "components/layout";
import Navbar from "components/layout/navbar";
import Footer from "components/layout/footer";
import Sidebar from "components/layout/sidebar";
import Styles from "styles/Transfer.module.css";
import ListUser from "components/layout/list-user/user-transfer";
import axios from "utils/axios";
import Pagination from "react-paginate";
import { useRouter } from "next/router";
import { getDataCookie } from "middleware/authorizationPage";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (!dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return { props: {} };
}
export default function History() {
  const router = useRouter();
  const { page: pageQ, search: searchQ } = router.query;
  console.log(pageQ, searchQ);
  const [dataUser, setDataUser] = useState([]);
  const [page, setPage] = useState(pageQ ? pageQ : 1);
  const [search, setSearch] = useState(searchQ ? searchQ : "");
  const [tidakDitemukan, setTidakDitemukan] = useState("");
  const [pageInfo, setPageInfo] = useState([]);

  const getAllUser = () => {
    axios
      .get(`/user?page=${page}&limit=4&search=${search}&sort=firstName ASC`)
      .then((res) => {
        setDataUser(res.data.data);
        setPageInfo(res.data.pagination);
        setTidakDitemukan(search);
        if (res.data.data.length < 1) {
          setPage(1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllUser();
    // router.push(`?page=${page}&search=${search}`);
  }, [page, pageQ, search, searchQ]);
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      getAllUser();
      router.push(`?page=${page}&search=${e.target.value}`);
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handlePagination = (event) => {
    setPage(Number(event.selected) + 1);
    // router.push(
    //   `?page=${event.selected + 1}&search=${searchQ ? searchQ : search}`
    // );
  };
  return (
    <Layout title="History Transfer | xWallet - Send your money without fee">
      <div className="" style={{ background: "rgb(99 121 244 / 4%)" }}>
        <Navbar />
        <section className="sidebar mt-5">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className={`col-md-9`}>
                <div className="card card__shadow ">
                  <div className="card-body  mx-3">
                    <p className="card__title">Search Receiver</p>

                    <div className="input-group mb-3">
                      <span
                        className={`input-group-text ${Styles.input__icon} `}
                      >
                        <img src="/icon/search.svg" alt="" />
                      </span>
                      <input
                        type="text"
                        className={`${Styles.input__filter} form-control `}
                        placeholder="Input Name & Enter"
                        onKeyPress={handleEnter}
                        onChange={handleChange}
                        name="Search"
                      />
                    </div>
                    {dataUser.length < 1 ? (
                      <div>
                        <h5 className="text-center">
                          <span className=" fw-bold">{tidakDitemukan}</span>{" "}
                          Tidak Ditemukan !
                        </h5>
                      </div>
                    ) : (
                      dataUser.map((e, i) => (
                        <ListUser
                          key={i}
                          name={e.firstName + e.lastName}
                          noTelp={e.noTelp}
                          image={e.image}
                          id={e.id}
                        />
                      ))
                    )}
                  </div>
                  <div className="showtimes__paginate d-flex justify-content-center mb-3">
                    <Pagination
                      previousLabel={"Sebelumnya"}
                      nextLabel={"Selanjutnya"}
                      previousClassName={"nonaktif_previous"}
                      nextClassName={"nonaktif_previous"}
                      breakLabel={" "}
                      // breakClassName={"btn btn-outline-primary btnPagination"}
                      pageCount={pageInfo.totalPage}
                      onPageChange={handlePagination}
                      initialPage={page - 1}
                      containerClassName={"pagination mr-5"}
                      disabledClassName={"pagination__link--disabled"}
                      activeClassName={"pagination__link--active btn-primary "}
                      pageClassName={" btn btn-outline-primary btnPagination"}
                    />
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
}
