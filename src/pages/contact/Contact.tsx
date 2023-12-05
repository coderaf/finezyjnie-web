import React from 'react';
import { container, homeSection } from '../../styles/commonStyles';
import * as styles from './Contact.styles';
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa';
import Text from '../../components/Text/Text';

const socialMediaLinks = {
  facebook: 'https://www.facebook.com/profile.php?id=100063321829442',
  instagram: 'https://www.instagram.com/finezyjnie.pl/',
  email: 'finezyjnagosia@gmail.com',
};

function Contact() {
  return (
    <div css={[homeSection, container]}>
      <div css={styles.contact}>
        <Text variant="dHeadline2" color="primary" marginBottom={48}>
          Kontakt
        </Text>

        <div css={styles.contactContent}>
          <div css={styles.contactItem}>
            <a href={`mailto:${socialMediaLinks.email}`} rel="noopener noreferrer">
              <FaEnvelope />
            </a>

            <Text variant="body16" color="black">
              finezyjnagosia@gmail.com
            </Text>
          </div>

          <div css={styles.contactItem}>
            <FaPhone />
            <Text variant="body16" color="black">
              +48 608 107 666
            </Text>
          </div>

          <div css={styles.contactItem}>
            <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <Text variant="body16" color="black">
              Finezyjnie.pl
            </Text>
          </div>

          <div css={styles.contactItem}>
            <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <Text variant="body16" color="black">
              Rękodzieło | Drewno
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
