import React, { useReducer } from 'react';
import CharactersContext from './charactersContext';
import CharactersReducer from './charactersReducer';
import axios from 'axios';

import { GET_CHARACTER, GET_CHARACTERS, SET_FILTERS } from '../Types';

const CharactersState = (props) => {
  const initialState = {
    characters: [],
    character: {},
    offset: 0,
    count: 10,
    loading: true,
  };

  const [state, dispatch] = useReducer(CharactersReducer, initialState);

  // fetch characters //
  const getCharacters = async (characterLimit = 10, offset = 0) => {
    try {
      const res = await axios.get(
        `https://www.breakingbadapi.com/api/characters?limit=${characterLimit}&offset=${offset}`
      );
      dispatch({ type: GET_CHARACTERS, payload: res.data });
    } catch (err) {
      dispatch({ type: GET_CHARACTERS, payload: err.response.msg });
    }
  };
  // SET FILTERS //
  const setFilter = (count, offset) => {
    dispatch({ type: SET_FILTERS, payload: { count, offset } });
  };

  return (
    <CharactersContext.Provider
      value={{
        characters: state,
        getCharacters,
        setFilter,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};

export default CharactersState;
