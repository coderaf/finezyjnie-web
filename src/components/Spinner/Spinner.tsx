import React, { CSSProperties } from 'react';
import MoonLoad from 'react-spinners/MoonLoader';
import { colors } from '../../theme/colors';

interface Props {
  size?: number;
  color?: string;
  override?: CSSProperties;
  isLoading?: boolean;
}

function Spinner({ color = colors.primary, override, size = 40, isLoading = true }: Props) {
  return (
    <MoonLoad
      color={color}
      loading={isLoading}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Spinner;
