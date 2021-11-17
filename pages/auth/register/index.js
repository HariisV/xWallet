import React, { useState } from "react";
import Image from "next/image";
import Leftbar from "components/module/auth/sidebar";
import Input from "components/module/auth/input";

export default function Register() {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    console.log(form);
    setForm({ ...form, [e.target.name]: e.target.value });
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
        <form action="" className="auth__input">
          <Input
            placeholder="Input Your First Name"
            name="firstName"
            icon="/icon/person.svg"
            type="text"
            onChange={handleChange}
          />
          <Input
            placeholder="Input Your Last Name"
            name="lastName"
            icon="/icon/person.svg"
            type="text"
            onChange={handleChange}
          />
          <Input
            placeholder="Enter Your Mail"
            name="email"
            icon="/icon/mail.svg"
            type="email"
            onChange={handleChange}
          />
          <Input
            placeholder="Create Your Password"
            name="password"
            icon="/icon/lock.svg"
            type="password"
            onChange={handleChange}
          />

          <button className="btn btn-primary auth__btn p-2 font-light">
            Login
          </button>
          <p className="text-center mt-3 auth__text">
            Already have an account? Let’s{" "}
            <a href="" style={{ color: "#3A3D42CC" }}>
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
