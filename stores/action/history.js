import axios from 'utils/axios';

export const getHistory = (data) => {
  return {
    type: 'GETHISTORY',
    payload: axios.get(`transaction/history?${data}`),
  };
};
