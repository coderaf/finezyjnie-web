import React, { useEffect, useRef } from 'react';
import * as styles from './Navbar.styles';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import MenuItem from '../MenuItem/MenuItem';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { isPathInHomePaths } from '../../utils/isPathInHomePaths';

function Navbar() {
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const homePaths = [PATHS.BLOG, PATHS.CONTACT];

  useEffect(() => {
    if (isPathInHomePaths(pathname, homePaths)) {
      return;
    }

    const header = headerRef.current;
    if (!header) return;

    const sticky = header.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset > sticky + 30) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleCartClick = () => {
    navigate(PATHS.CART, { state: { context: pathname } });
  };

  return (
    <div
      css={[
        styles.navbarWrapper,
        isPathInHomePaths(pathname, homePaths) && styles.homeNavbarWrapper,
      ]}
    >
      <nav
        css={[styles.navbarSticky, isPathInHomePaths(pathname, homePaths) && styles.homeNavbar]}
        ref={headerRef}
      >
        <div css={styles.navbar}>
          {!isPathInHomePaths(pathname, homePaths) && (
            <div css={styles.navbarLogoWrapper} onClick={() => navigate(PATHS.HOME)}>
              <Logo />
            </div>
          )}
          <ul
            css={[
              styles.navbarList,
              !isPathInHomePaths(pathname, homePaths) && styles.navbarShopList,
            ]}
          >
            <MenuItem
              label="Sklep"
              pathname={PATHS.SHOP}
              isHome={isPathInHomePaths(pathname, homePaths)}
            />
            <MenuItem
              label="Blog"
              pathname={PATHS.BLOG}
              isHome={isPathInHomePaths(pathname, homePaths)}
            />
            <MenuItem
              label="Kontakt"
              pathname={PATHS.CONTACT}
              isHome={isPathInHomePaths(pathname, homePaths)}
            />

            {!isPathInHomePaths(pathname, homePaths) && (
              <li onClick={handleCartClick}>
                <ShoppingCart />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
