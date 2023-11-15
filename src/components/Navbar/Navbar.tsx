import React from 'react';
import * as styles from './Navbar.styles';
import { NavLink } from 'react-router-dom';
import { PathConstants } from '../../routes/pathConstants';
import { colors } from '../../theme/colors';

function Navbar() {
  return (
    <nav css={styles.navbar}>
      <ul css={styles.navbarList}>
        <li>
          <NavLink
            to={PathConstants.SHOP}
            style={({ isActive }) => {
              return {
                color: isActive ? colors.black : '',
              };
            }}
            css={styles.navbarLink}
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
            css={styles.navbarLink}
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
            css={styles.navbarLink}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
