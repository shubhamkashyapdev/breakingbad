import React, { useReducer } from 'react';
import CharactersContext from './charactersContext';
import CharactersReducer from './charactersReducer';
import axios from 'axios';

import { GET_CHARACTER, GET_CHARACTERS } from '../Types';

const CharactersState = (props) => {
  const initialState = {
    characters: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(CharactersReducer, initialState);

  // fetch characters //
  const getCharacter = async (characterLimit, offset) => {
    try {
      const res = await axios.get(
        `https://www.breakingbadapi.com/api/characters?limit=${characterLimit}&offset=${offset}`
      );
      dispatch({ type: GET_CHARACTERS, payload: res.data });
    } catch (err) {
      dispatch({ type: GET_CHARACTERS, payload: err.response.msg });
    }
  };
  // Remove Alert //

  return (
    <CharactersContext.Provider
      value={{
        characters: state,
        setAlert,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};

export default CharactersState;
