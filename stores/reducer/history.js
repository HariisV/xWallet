const initialState = {
  isError: false,
  isLoading: false,
  msg: "",
  data: {},
  pageInfo: {},
};

const Historys = (state = initialState, action) => {
  switch (action.type) {
    case "GETHISTORY_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "GETHISTORY_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    }
    case "GETHISTORY_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }

    default: {
      return state;
    }
  }
};
export default Historys;
