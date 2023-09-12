// store.js
import { createStore } from 'redux';

// Действия
const ADD_TEXT = 'ADD_TEXT';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const addText = (text) => ({
  type: ADD_TEXT,
  payload: text,
});

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// Общее начальное состояние для всех редюсеров
const initialState = {
  textList: [],
  count: 0, // Добавьте состояние счетчика
};

// Редюсер
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        textList: [...state.textList, action.payload],
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// Создание и экспорт Redux Store
const store = createStore(reducer);

export default store;
