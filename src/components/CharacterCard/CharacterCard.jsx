import React from 'react';
import { useHistory } from 'react-router-dom';

// css //
import styles from './CharacterCard.scss';

const CharacterCard = ({ character }) => {
  const history = useHistory();
  const id = character.char_id;
  const singleCharacter = () => {
    history.push(`/character/${id}`);
  };
  return (
    <div className='card' onClick={singleCharacter}>
      <div className='card__image-container'>
        <img src={character.img} alt='' />
      </div>
      <div className='name'>Name: {character.name}</div>
      <div className='category'>{character.category}</div>
    </div>
  );
};

export default CharacterCard;
