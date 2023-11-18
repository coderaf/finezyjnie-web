import React, { ReactElement, CSSProperties, ReactNode } from 'react';
import { typography, FontVariant } from '../../theme/typography';
import { colors } from '../../theme/colors';

interface TextProps {
  variant: FontVariant;
  style?: CSSProperties;
  children?: ReactNode;
  color?: keyof typeof colors;
  lowercase?: boolean;
  uppercase?: boolean;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
}

function Text({
  variant,
  style,
  children,
  color = 'black',
  lowercase,
  uppercase,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
}: TextProps): ReactElement {
  const variantConfig = typography.variants[variant];

  if (lowercase && typeof children === 'string') {
    children = children.toLowerCase();
  }

  if (uppercase && typeof children === 'string') {
    children = children.toUpperCase();
  }

  if (!variantConfig) {
    console.warn(`Typography variant "${variant}" not found. Using default.`);
    return <p style={{ ...typography.variants.body16, ...style }}>{children}</p>;
  }

  const { fontFamily, fontWeight, fontSize, lineHeight, ...otherStyles } = variantConfig;

  return (
    <p
      style={{
        fontFamily,
        fontWeight,
        fontSize,
        lineHeight,
        color: colors[color],
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
        ...style,
        ...otherStyles,
      }}
    >
      {children}
    </p>
  );
}

export default Text;
