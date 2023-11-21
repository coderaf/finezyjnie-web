import React from 'react';
import * as commonStyles from '../../styles/commonStyles';
import * as styles from './Footer.styles';
import { SlSocialFacebook } from 'react-icons/sl';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import Text from '../Text/Text';

function Footer() {
  // todo: change to real data
  const socialMediaLinks = {
    facebook: 'https://www.facebook.com/profile.php?id=100063321829442',
    instagram: 'https://www.instagram.com/finezyjnie.pl/',
    email: 'finezyjnagosia@gmail.com',
  };

  return (
    <footer css={[commonStyles.container, styles.footer]}>
      <Text variant="body12" color="white">
        © {new Date().getFullYear()} - Developed by{' '}
        <a href="https://github.com/kj-ninja" target="_blank" rel="noopener noreferrer">
          kj-ninja
        </a>
      </Text>
      <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
        <AiOutlineInstagram size={25} />
      </a>

      <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
        <SlSocialFacebook size={25} />
      </a>

      <a href={`mailto:${socialMediaLinks.email}`} rel="noopener noreferrer">
        <AiOutlineMail size={25} />
      </a>
    </footer>
  );
}

export default Footer;
