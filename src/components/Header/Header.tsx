import React from 'react';
import * as styles from './Header.styles';
import * as commonStyles from '../../styles/commonStyles';
import Navbar from '../Navbar/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header css={[styles.header, commonStyles.container]}>
      {pathname === PATHS.HOME && (
        <div
          css={styles.headerImage(
            require('../../assets/images/bg-header-desktop.jpeg'),
            require('../../assets/images/bg-header-mobile.jpeg')
          )}
          onClick={() => navigate(PATHS.HOME)}
        />
      )}

      <Navbar />
    </header>
  );
}

export default Header;
