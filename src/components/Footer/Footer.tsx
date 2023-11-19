import React from 'react';
import * as commonStyles from '../../styles/commonStyles';
import * as styles from './Footer.styles';
import { SlSocialFacebook } from 'react-icons/sl';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import Text from '../Text/Text';

function Footer() {
  return (
    <footer css={[commonStyles.container, styles.footer]}>
      <Text variant="body12" color="white">
        © {new Date().getFullYear()} - Developed by{' '}
        <a href="https://github.com/kj-ninja" target="_blank" rel="noopener noreferrer">
          kj-ninja
        </a>
      </Text>
      <AiOutlineInstagram size={25} />
      <SlSocialFacebook size={25} />
      <AiOutlineMail size={25} />
    </footer>
  );
}

export default Footer;
