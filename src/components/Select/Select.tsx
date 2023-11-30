import React from 'react';
import ReactSelect, { StylesConfig, Props as DropdownProps } from 'react-select';
import { colors } from '../../theme/colors';
import { useMediaQueries } from '../../hooks/useMediaQueries';

interface Props extends DropdownProps {
  label?: string;
  error?: boolean;
  errorMessage?: string | string[];
}

interface ControlPropsSubset {
  isFocused: boolean;
  menuIsOpen: boolean;
  isDisabled: boolean;
}

function Select({ label, error, errorMessage, ...restProps }: Props) {
  const { isMobile } = useMediaQueries();

  const getBorderColor = ({ isFocused, menuIsOpen, isDisabled }: ControlPropsSubset) => {
    if (isDisabled) {
      return colors.inputDisabled;
    }

    if (error) {
      return colors.error;
    }

    if (isFocused || menuIsOpen) {
      return colors.primary;
    }

    return colors.secondary;
  };

  const colourStyles: StylesConfig<any> = {
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (styles, { isDisabled }) => ({
      ...styles,
      color: isDisabled ? colors.inputDisabled : colors.primary,
      '&:hover': {
        color: isDisabled ? colors.inputDisabled : colors.primary,
      },
    }),
    control: (styles, { isFocused, menuIsOpen, isDisabled }) => ({
      ...styles,
      backgroundColor: isDisabled ? '#f2f2f2' : 'transparent',
      cursor: 'pointer',
      borderColor: getBorderColor({ isFocused, menuIsOpen, isDisabled }),
      borderRadius: '10px',
      boxShadow: 'unset',
      '&:focus-within': {
        borderColor: error ? colors.error : colors.primary,
      },
      '&:hover': {
        borderColor: error ? colors.error : isFocused ? colors.primary : colors.secondary,
      },
    }),
    valueContainer: (styles) => ({ ...styles, padding: isMobile ? '0 0 0 4px' : '6px 8px' }),
    input: (styles) => ({ ...styles, color: colors.white }),
    menu: (provided) => ({
      ...provided,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected ? colors.primary : isFocused ? colors.secondary : colors.white,
      color: isSelected ? colors.white : colors.black,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: isSelected ? colors.primary : isFocused ? colors.secondary : colors.white,
        color: isSelected ? colors.white : colors.black,
      },
    }),
    singleValue: (styles, { isDisabled }) => ({
      ...styles,
      color: isDisabled ? colors.inputValueDisabled : colors.black,
    }),
    container: (styles) => ({
      ...styles,
      width: '100%',
      maxWidth: '100px',
    }),
  };

  return (
    <>
      <ReactSelect styles={colourStyles} {...restProps} />
    </>
  );
}

export default Select;
