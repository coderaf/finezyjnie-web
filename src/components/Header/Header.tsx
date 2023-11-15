import React from 'react';
import * as styles from './Header.styles';
import * as commonStyles from '../../styles/commonStyles';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { PathConstants } from '../../routes/pathConstants';

function Header() {
  const navigate = useNavigate();

  return (
    <header css={[styles.header, commonStyles.container]}>
      <div css={styles.headerImage} onClick={() => navigate(PathConstants.HOME)} />
      <Navbar />
    </header>
  );
}

export default Header;
