import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

// css //
import styles from './CharacterCard.scss';

const cardTransition = {
  initial: {},
  animated: {},
};

const CharacterCard = ({ character }) => {
  const [selectedId, setSelectedId] = useState(null);

  const history = useHistory();
  const id = character.char_id;
  const singleCharacter = () => {
    history.push(`/character/${id}`);
  };
  return (
    <motion.div className='card' onClick={singleCharacter}>
      <div
        className='card__bg'
        style={{ backgroundImage: `url(${character.img})` }}
      >
        <div className='card__container'>
          <div className='card__name'>Name: &nbsp; {character.name}</div>
          <div className='card__category'>
            {' '}
            Category: &nbsp;{character.category}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterCard;
