import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './Header.styles';
import * as commonStyles from '../../styles/commonStyles';
import { PathConstants } from '../../routes/pathConstants';
import { colors } from '../../theme/colors';

function Header(): ReactElement {
  return (
    <header css={[styles.header, commonStyles.container]}>
      <div css={styles.headerImage} />

      {/*todo extract to seperate component and map through array of links*/}
      <nav css={styles.headerMenu}>
        <ul css={styles.headerMenuList}>
          <li>
            <NavLink
              to={PathConstants.SHOP}
              style={({ isActive }) => {
                return {
                  color: isActive ? colors.black : '',
                };
              }}
              css={styles.headerMenuLink}
            >
              Sklep
            </NavLink>
          </li>
          <li>
            <NavLink
              to={PathConstants.BLOG}
              style={({ isActive }) => {
                return {
                  color: isActive ? colors.black : '',
                };
              }}
              css={styles.headerMenuLink}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to={PathConstants.CONTACT}
              style={({ isActive }) => {
                return {
                  color: isActive ? colors.black : '',
                };
              }}
              css={styles.headerMenuLink}
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
