import { GET_CHARACTERS, GET_CHARACTER, SET_FILTERS } from '../Types';

const characterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
        loading: false,
      };
    case SET_FILTERS:
      return {
        ...state,
        count: payload.count,
        offset: payload.offset,
      };
    default:
      return state;
  }
};

export default characterReducer;
