import React, { Fragment, useContext, useEffect } from 'react';
import CharacterContext from '../../context/Characters/charactersContext';

// components //
import CharacterCard from '../../components/CharacterCard/CharacterCard';

// css //
import './Characters.scss';

const CharacterList = () => {
  const charactersContext = useContext(CharacterContext);
  const { characters, loading, getCharacters } = charactersContext;
  const charactersList = characters.characters;
  const { count, offset } = characters;
  // effects //
  useEffect(() => {
    getCharacters(characters.count, characters.offset);
    // eslint-disable-next-line
  }, [offset, count]);

  return (
    <div className='characters'>
      {!loading ? (
        <div className='characters__container'>
          {charactersList.map((item) => (
            <div key={item.char_id}>
              <CharacterCard character={item} />
            </div>
          ))}
        </div>
      ) : (
        <div>Loading!!</div>
      )}
    </div>
  );
};

export default CharacterList;
