import ACTIONS from '../actions/actionTypes';

const initialState = {
  transactions: [],
  isFetching: false,
  isError: null,
};

const transactionReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTIONS.GET_TRANSACTIONS_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTIONS.GET_TRANSACTIONS_SUCCESS: {
      const { transactions } = action;
      return { ...state, isFetching: false, error: null, transactions };
    }
    case ACTIONS.GET_TRANSACTIONS_ERROR: {
      const { error } = action;
      return { ...state, isFetching: false, error };
    }
  }
};

export default transactionReducer;
