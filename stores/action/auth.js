import axios from "utils/axios";

export const loginUser = (form) => {
  return { type: "Login", payload: axios.post("/auth/login", form) };
};
