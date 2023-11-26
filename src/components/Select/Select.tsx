import React from 'react';
import ReactSelect, { StylesConfig, Props as DropdownProps } from 'react-select';
import { colors } from '../../theme/colors';
import { useMediaQueries } from '../../hooks/useMediaQueries';

interface Props extends DropdownProps {
  label?: string;
  error?: boolean;
  errorMessage?: string | string[];
}

function Select({ label, error, errorMessage, ...restProps }: Props) {
  const { isMobile } = useMediaQueries();

  const colourStyles: StylesConfig<any> = {
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: colors.primary,
      '&:hover': {
        color: colors.primary,
      },
    }),
    control: (styles, { isFocused, menuIsOpen }) => ({
      ...styles,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      borderColor: error
        ? colors.error
        : isFocused || menuIsOpen
        ? colors.primary
        : colors.secondary,
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
    singleValue: (styles) => ({ ...styles, color: colors.black }),
    container: (styles) => ({ ...styles, width: '100%', maxWidth: '100px' }),
  };

  return (
    <>
      <ReactSelect styles={colourStyles} {...restProps} />
    </>
  );
}

export default Select;
