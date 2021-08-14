import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// component //
import Filter from '../Filter/Filter';

// css //
import './Header.scss';

const Header = () => {
  return (
    <Fragment>
      <div className='header'>
        <div className='header__container'>
          <div className='header__logo'>Logo</div>
          <ul className='header__list'>
            <li className='header__item'>
              <Link to='/badcharacter'>Home</Link>
            </li>
            <li className='header__item'>
              <Link to='/badcharacter'>About</Link>
            </li>
          </ul>
        </div>
      </div>
      <Filter />
    </Fragment>
  );
};

export default Header;
