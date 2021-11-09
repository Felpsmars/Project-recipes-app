import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Button from './Button';
import DefaultInput from './DefaultInput';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

import '../Styles/Header.css';

function Header({ children, disabledSearch }) {
  const [redirectProfile, setRedirectProfile] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const searchBar = () => (
    <section className="search-input">
      <DefaultInput
        id="search-input"
        name="search-input"
        onChange={ () => {} }
        placeholder="Ex: Macarrão"
        type="text"
      />
    </section>
  );

  const btnSearch = () => (
    <section className="search-container">
      <Button
        dataTestId="search-top-btn"
        display={ disabledSearch }
        src={ searchIcon }
        onClick={ () => setShowSearchBar(!showSearchBar) }
      >
        <img src={ searchIcon } alt="Profile Icon" />
      </Button>
    </section>
  );

  return (
    <header className="header">
      { redirectProfile && <Redirect to="/perfil" /> }

      <div className="container-icons">
        <section className="perfil-container">
          <Button
            dataTestId="profile-top-btn"
            onClick={ () => setRedirectProfile(true) }
            src={ profileIcon }
          >
            <img src={ profileIcon } alt="Profile Icon" />
          </Button>
        </section>

        <section className="title-page-container">
          <h1 className="title-page" data-testid="page-title">
            { children }
          </h1>
        </section>
        { !disabledSearch && btnSearch() }
      </div>

      { showSearchBar && searchBar() }
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
  disabledSearch: PropTypes.bool,
};

Header.defaultProps = {
  disabledSearch: false,
};

export default Header;
