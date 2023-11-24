import React from 'react';
import { useRouteError } from 'react-router-dom';
import * as styles from './ErrorPage.styles';
import Text from '../../components/Text/Text';

function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div css={styles.errorPage}>
      <Text variant="dHeadline1" marginBottom={8}>
        Ups!
      </Text>
      <Text variant="body16" marginBottom={8}>
        Przepraszamy, wystąpił nieoczekiwany błąd.
      </Text>
      <Text variant="body16">
        <i>{error.statusText || error.message}</i>
      </Text>
    </div>
  );
}

export default ErrorPage;
