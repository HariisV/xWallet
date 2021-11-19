import React, { useState } from "react";
import Layout from "components/layout";
import Navbar from "components/layout/navbar";
import Footer from "components/layout/footer";
import Sidebar from "components/layout/sidebar";
import Styles from "styles/Profile.module.css";
import Image from "next/image";
import PersonalInfo from "components/profile/personal-info";
import Index from "components/profile";
import Testing from "components/profile/personal-info";

export default function History(props) {
  const [isShow, setIsShow] = useState("confirm");

  return (
    <Layout title="Transfer Money | xWallet - Send your money without fee">
      <div className="" style={{ background: "rgb(99 121 244 / 4%)" }}>
        <Navbar />
        <section className="sidebar mt-5">
          <div className="container">
            <div className="row">
              <Sidebar />

              <div className={`col-md-9`}>
                <Testing />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
}
