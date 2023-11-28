import React, { ReactNode } from 'react';
import { FieldAttributes, useField } from 'formik';
import Text from '../Text/Text';
import * as styles from './Checkbox.styles';

interface Props extends FieldAttributes<any> {
  children: ReactNode;
  name: string;
}

function Checkbox({ children, ...props }: Props) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label>
        <input
          css={meta.error && meta.touched && styles.checkboxError}
          type="checkbox"
          {...field}
          {...props}
        />
        {children}
      </label>

      {meta.touched && meta.error && (
        <Text variant="body14" color="error">
          {meta.error}
        </Text>
      )}
    </>
  );
}

export default Checkbox;
