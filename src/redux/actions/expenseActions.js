import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  GET_EXPENSES,
  RECEIVED_EXCHANGE_RATE_RESPONSE,
} from './actionTypes';

export const getExpense = (expenses) => ({
  type: GET_EXPENSES,
  payload: expenses,
});

export const addExpense = (newExpense) => ({
  type: ADD_EXPENSE,
  payload: newExpense,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

export const receivedExchangeRate = (exchangeRate) => ({
  type: RECEIVED_EXCHANGE_RATE_RESPONSE,
  payload: exchangeRate,
});
