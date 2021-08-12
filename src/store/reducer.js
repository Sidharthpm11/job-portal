import { FETCH_USER } from "./types";

const intialState = {
  user: null,
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
