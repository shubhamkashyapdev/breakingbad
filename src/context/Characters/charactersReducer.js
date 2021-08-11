import { GET_CHARACTERS, GET_CHARACTER } from '../Types';

const characterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default characterReducer;
