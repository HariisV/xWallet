import axios from "utils/axios";

export const getHistory = (data) => {
  console.log("REDUCER ", data);
  return {
    type: "GETHISTORY",
    payload: axios.get(`transaction/history?${data}`),
  };
};
