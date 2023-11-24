import React from 'react';
import Text from '../Text/Text';

function ErrorMessage() {
  return (
    <Text variant="body16" color="error">
      Chwilowy brak połączenia z serwerem.
      <br />
      Spróbuj ponownie później.
    </Text>
  );
}

export default ErrorMessage;
