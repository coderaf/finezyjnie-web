import React from 'react';
import * as styles from './Header.styles';
import * as commonStyles from '../../styles/commonStyles';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

// todo: change imgs
const fallbackHeaderImageDesktop = 'https://picsum.photos/1000/200?grayscale';
const fallbackHeaderImageMobile = 'https://picsum.photos/400/200?grayscale';

function Header() {
  const navigate = useNavigate();

  return (
    <header css={[styles.header, commonStyles.container]}>
      <div
        css={styles.headerImage(fallbackHeaderImageDesktop, fallbackHeaderImageMobile)}
        onClick={() => navigate(PATHS.HOME)}
      />
      <Navbar />
    </header>
  );
}

export default Header;
