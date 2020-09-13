import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  RECEIVED_EXPENSES,
  RECEIVED_EXCHANGE_RATE_RESPONSE,
} from '../actions/actionTypes';

import {storeObject} from '../../services/storage';

const initialState = {
  expenses: [],
  exchangeRate: 0,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_EXPENSE: {
      const newExpenses = [payload, ...state.expenses];
      storeObject('expenses', newExpenses);

      return {
        ...state,
        expenses: newExpenses,
      };
    }
    case DELETE_EXPENSE: {
      const newExpenses = state.expenses.filter(
        (expense) => expense.id !== payload,
      );
      storeObject('expenses', newExpenses);

      return {
        ...state,
        expenses: newExpenses,
      };
    }
    case RECEIVED_EXPENSES:
      return {
        ...state,
        expenses: payload,
      };
    case RECEIVED_EXCHANGE_RATE_RESPONSE:
      console.log('saving + ' + payload);
      return {
        ...state,
        exchangeRate: payload,
      };
    default:
      return state;
  }
};
