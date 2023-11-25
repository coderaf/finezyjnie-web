import React, { CSSProperties } from 'react';
import MoonLoad from 'react-spinners/MoonLoader';
import { colors } from '../../theme/colors';

interface Props {
  size?: number;
  color?: string;
  loading?: boolean;
  override?: CSSProperties;
}

function Spinner({ color = colors.primary, loading = true, override, size = 40 }: Props) {
  return (
    <MoonLoad
      color={color}
      loading={loading}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Spinner;
