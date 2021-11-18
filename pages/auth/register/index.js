import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Leftbar from "components/module/auth/sidebar";
import Input from "components/module/auth/input";
import axios from "utils/axios";
import { useRouter } from "next/router";
import { Notify, ContainerToast } from "components/reusable/notify";

export default function Registers() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("JALAN");
    setIsLoading(true);
    axios
      .post("/auth/register", data)
      .then((res) => {
        Notify("Berhasil Register, Verifikasi Email Sekarang !", 200);
        setTimeout(() => {
          router.push("/auth/login");
        }, 4000);
      })
      .catch((err) => {
        Notify(err.response.data.msg, 400);
        console.log(err.response.data.msg);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };
  return (
    <div className="row p-0 m-0">
      <ContainerToast />

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
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="auth__input"
        >
          <Input
            placeholder="Input Your First Name"
            icon="/icon/person.svg"
            type="text"
            isInvalid={errors.firstName ? true : false}
            reactForm={register("firstName", { required: true })}
          />
          {errors.firstName && (
            <small className="isInvalid">First Name is required</small>
          )}

          <Input
            placeholder="Input Your Last Name"
            icon="/icon/person.svg"
            type="text"
            isInvalid={errors.lastName ? true : false}
            reactForm={register("lastName", { required: true })}
          />
          {errors.lastName && (
            <small className="isInvalid">Input your last name</small>
          )}
          <Input
            placeholder="Enter Your Mail"
            icon="/icon/mail.svg"
            type="text"
            isInvalid={errors.email ? true : false}
            reactForm={register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          {errors.email && (
            <small className="isInvalid">Your Email is not valid</small>
          )}
          <Input
            placeholder="Create Your Password"
            icon="/icon/lock.svg"
            type="password"
            isInvalid={errors.password ? true : false}
            reactForm={register("password", { required: true, min: 6 })}
          />
          {errors.password && (
            <small className="isInvalid">Min Password 6 Character</small>
          )}
          <button className="btn btn-primary auth__btn p-2 font-light mt-4">
            {isLoading ? (
              <>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>
            ) : (
              "Login"
            )}
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
