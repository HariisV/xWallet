import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "components/layout/navbar";
import Footer from "components/layout/footer";

export default function Home() {
  return (
    <>
      <div className="" style={{ background: "#e5e5e55e" }}>
        <Navbar />
        <section className="dashboard mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card card-body bg-white">
                  <ul>
                    <li>
                      <Image
                        src="/icon/dashboard.svg"
                        width={28}
                        height={28}
                        alt=""
                      />
                      Dashboard
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                quia soluta possimus ab harum aut autem? Hic, error! Neque harum
                voluptatem nesciunt accusantium atque voluptatibus eos quisquam
                perspiciatis ab ratione!
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
