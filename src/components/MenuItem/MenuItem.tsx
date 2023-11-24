import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './MenuItem.styles';

interface Props {
  label: string;
  pathname: string;
  isHome?: boolean;
}

function MenuItem({ label, pathname, isHome }: Props) {
  return (
    <li>
      <NavLink
        to={pathname}
        // style={({ isActive }) => {
        //   return {
        //     fontWeight: isActive ? 'bold' : 'normal',
        //   };
        // }}
        css={[styles.menuItem, isHome && styles.homeMenuItem]}
      >
        {label}
      </NavLink>
    </li>
  );
}

export default MenuItem;
