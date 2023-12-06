import React from 'react';
import * as styles from './Footer.styles';
import { SlSocialFacebook } from 'react-icons/sl';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import Text from '../Text/Text';
import { useMediaQueries } from '../../hooks/useMediaQueries';

const socialMediaLinks = {
  facebook: 'https://www.facebook.com/profile.php?id=100063321829442',
  instagram: 'https://www.instagram.com/finezyjnie.pl/',
  email: 'finezyjnagosia@gmail.com',
};

function Footer() {
  const { isMobile } = useMediaQueries();

  return (
    <footer css={styles.footer}>
      <div css={styles.footerContent}>
        <Text variant="body12" color="white">
          © {new Date().getFullYear()} - Developed by{' '}
          <a href="https://coderaf.com/" target="_blank" rel="noopener noreferrer">
            coderaf{' '}
          </a>
          and{' '}
          <a href="https://github.com/kj-ninja" target="_blank" rel="noopener noreferrer">
            kj-ninja
          </a>
        </Text>
        <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram size={isMobile ? 20 : 25} />
        </a>

        <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
          <SlSocialFacebook size={isMobile ? 20 : 25} />
        </a>

        <a href={`mailto:${socialMediaLinks.email}`} rel="noopener noreferrer">
          <AiOutlineMail size={isMobile ? 20 : 25} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
