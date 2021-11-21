/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Layout from "components/layout";
import Navbar from "components/layout/navbar";
import Footer from "components/layout/footer";
import Sidebar from "components/layout/sidebar";
import Styles from "styles/History.module.css";
import UserHistory from "components/layout/list-user/user-history";
import Pagination from "react-paginate";
import { getHistory } from "stores/action/history";
import { getDataCookie } from "middleware/authorizationPage";
import { useRouter } from "next/router";

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

const History = (props) => {
  const router = useRouter();
  const { page: pageQ, filter: filterQ } = router.query;
  const [page, setPage] = useState(pageQ ? pageQ : 1);
  const [filter, setFilter] = useState(filterQ ? filterQ : "WEEK");
  const dataHistory = props.history.data;
  const pageInfo = props.history.pageInfo;

  useEffect(() => {
    // props.getHistory(`page=${page}&limit=4&filter=${filter}`);
    props.getHistory(`page=${page}&limit=4&filter=${filter}`).then((res) => {
      if (res.value.data.data.length < 1) {
        setPage(1);
        router.push(`?page=${page}&filter=${filter}`);
      }
    });
  }, [page, filter]);
  const handlePagination = (event) => {
    setPage(Number(event.selected) + 1);
    router.push(`?page=${Number(event.selected) + 1}&filter=${filter}`);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
    router.push(`?page=${page}&filter=${e.target.value}`);
  };
  return (
    <Layout title="History Transfer | xWallet - Send your money without fee">
      <div className="" style={{ background: "rgb(99 121 244 / 4%)" }}>
        <Navbar />
        <section className="sidebar mt-5">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className={`col-md-8`}>
                <div className="card card__shadow ">
                  <div className="card-body  mx-3">
                    <div className="d-flex justify-content-lg-between mt-3">
                      <p className="card__title">Transaction History</p>
                      <select
                        className={`form-select ${Styles.input__sort} text-center mb-4`}
                        aria-label="Disabled select example"
                        onChange={handleFilter}
                        defaultValue={filter}
                      >
                        <option selected disabled>
                          Select Filter
                        </option>
                        <option value="WEEK">Week</option>
                        <option value="MONTH">Month</option>
                        <option value="YEAR">Year</option>
                        {/* WEEK | MONTH | YEAR */}
                      </select>
                    </div>
                    {dataHistory.map((e, i) => (
                      <UserHistory
                        key={i}
                        name={e.fullName}
                        type={e.type}
                        id={e.id}
                        status={e.status}
                        image={e.image}
                        total={e.amount}
                      />
                    ))}

                    <div className="showtimes__paginate d-flex justify-content-center mt-5">
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
                        activeClassName={
                          "pagination__link--active btn-primary "
                        }
                        pageClassName={" btn btn-outline-primary btnPagination"}
                      />
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
const mapDispatchToProps = { getHistory };
export default connect(mapStateToProps, mapDispatchToProps)(History);
