import React, { useEffect, useRef } from 'react';
import * as styles from './Navbar.styles';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import MenuItem from '../MenuItem/MenuItem';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

function Navbar() {
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const homePaths = [PATHS.HOME, PATHS.BLOG, PATHS.CONTACT];

  useEffect(() => {
    if (homePaths.includes(pathname)) {
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
    <div css={[styles.navbarWrapper, homePaths.includes(pathname) && styles.homeNavbarWrapper]}>
      <nav
        css={[styles.navbarSticky, homePaths.includes(pathname) && styles.homeNavbar]}
        ref={headerRef}
      >
        <div css={styles.navbar}>
          {!homePaths.includes(pathname) && (
            <div css={styles.navbarLogoWrapper} onClick={() => navigate(PATHS.HOME)}>
              <Logo />
            </div>
          )}
          <ul css={[styles.navbarList, !homePaths.includes(pathname) && styles.navbarShopList]}>
            <MenuItem label="Sklep" pathname={PATHS.SHOP} isHome={homePaths.includes(pathname)} />
            <MenuItem label="Blog" pathname={PATHS.BLOG} isHome={homePaths.includes(pathname)} />
            <MenuItem
              label="Kontakt"
              pathname={PATHS.CONTACT}
              isHome={homePaths.includes(pathname)}
            />

            {!homePaths.includes(pathname) && (
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
