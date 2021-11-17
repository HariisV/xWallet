import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Navbar from "components/reusable/navbar";
import Footer from "components/reusable/footer";
import Sidebar from "components/reusable/sidebar";

export default function Home() {
  return (
    <>
      <div className="" style={{ background: "rgb(99 121 244 / 4%)" }}>
        <Navbar />
        <Sidebar />
        <Footer />
      </div>
    </>
  );
}
