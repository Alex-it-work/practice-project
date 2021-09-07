import ACTION from '../actions/actionTypes';

const initialState = {
  isFatching: false,
  error: null,
  transactions: [],
};

function transactionReducer (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION.GET_TRANSACTIONS_REQUEST: {
      return { ...state, isFatching: true, error: null };
    }
    case ACTION.GET_TRANSACTIONS_SUCCESS: {
      const { transactions } = action;
      return { ...state, isFatching: false, transactions };
    }
    case ACTION.GET_TRANSACTIONS_ERROR: {
      const { error } = action;
      return { ...state, isFatching: false, error };
    }
    default:
      return state;
  }
}

export default transactionReducer;
