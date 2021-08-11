import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// context //
import CharactersContext from '../../context/Characters/charactersContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

// css //
import './Character.scss';

// components //

const Character = () => {
  const [singleCharacter, setSingleCharacter] = useState({});
  const charactersContext = useContext(CharactersContext);
  const { characters, loading, getCharacters } = charactersContext;
  const charId = useParams('id').id;
  console.log(singleCharacter);

  useEffect(() => {
    if (characters.characters.length === 0) {
      getCharacters();
    } else {
      if (characters) {
        getCharacters();
        setSingleCharacter(
          characters.characters.filter((char) => {
            return char.char_id == parseInt(charId);
          })[0]
        );
      }
    }

    // eslint-disable-next-line
  }, [charId]);

  return (
    <div>
      {!loading ? (
        <div className='profile'>
          <div className='profile__container'>
            <div className='profile__img-container'>
              <img src={singleCharacter.img} alt='' />
            </div>
            <div className='profile__info'>
              <div className='profile__info__container'>
                <div className='profile__info__top-container'>
                  <div className='profile__info__stars'>
                    {singleCharacter.apperance && singleCharacter.length > 0 ? (
                      singleCharacter.appearance.map((item, index) => (
                        <i key={`${index}`} className='fas fa-star'></i>
                      ))
                    ) : (
                      <h4>Apperance</h4>
                    )}
                  </div>
                  <h3 className='profile__info__title'>
                    {singleCharacter.name}
                  </h3>
                  <h5 className='profile__info__category'>
                    {singleCharacter.category}
                  </h5>
                </div>
                <div className='profile__info__bottom-container'>
                  <div className='profile__info__occupation'>
                    <h3>Occupation</h3>
                    {singleCharacter.occupation?.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>
                  <hr />
                  <h3 className='profile__info__status'>Status</h3>
                  <h5 className='profile__info__status-text'>
                    {singleCharacter.status}
                  </h5>
                  <hr />
                  <h3 className='profile__info__nickname'>Nickname</h3>
                  <h5 className='profile__info__nickname-text'>
                    {singleCharacter.nickname}
                  </h5>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='loading'>Loading!!</div>
      )}
    </div>
  );
};

export default Character;
