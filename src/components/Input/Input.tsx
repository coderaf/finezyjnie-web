import React from 'react';
import { FieldAttributes, useField } from 'formik';
import Text from '../Text/Text';
import * as styles from './Input.styles';

interface Props extends FieldAttributes<any> {
  label: string;
  name: string;
  isTextArea?: boolean;
  maxLength?: number;
}

function Input({ label, isTextArea, maxLength, ...props }: Props) {
  const [field, meta] = useField(props);

  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <InputComponent
        maxLength={maxLength}
        css={[styles.input, meta.error && meta.touched && styles.inputError]}
        {...field}
        {...props}
        onKeyDown={
          props.type === 'number'
            ? (evt) => ['e', 'E', '+', '-', ',', '.'].includes(evt.key) && evt.preventDefault()
            : undefined
        }
      />

      {meta.touched && meta.error && (
        <Text variant="body14" color="error" marginTop={4}>
          {meta.error}
        </Text>
      )}
    </>
  );
}

export default Input;
