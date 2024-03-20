// components/Text.tsx
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../styles/colors';


interface TextProps {
  children: ReactNode;
  size?: keyof typeof sizes;
  weight?: keyof typeof weights;
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
}

const sizes = {
  '100': '11px',
  '200': '13px',
  '300': '16px',
  '400': '20px',
  '500': '24px',
  '600': '32px',
  '700': '40px',
  '800': '48px',
  '900': '64px',
  '1000': '76px',
} as const;

const weights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};

const Text = styled.div<TextProps>`
  font-family: 'Wanted Sans', sans-serif;
  ${({ size = '400' }) => css`
    font-size: ${sizes[size]};
  `}
  ${({ weight = 'regular' }) => css`
    font-weight: ${weights[weight]};
  `}
  ${({ color = colors.Grey800 }) => css`
    color: ${color};
  `}
  ${({ textAlign }) => textAlign && css`
    text-align: ${textAlign};
  `}
`;

export default Text;
