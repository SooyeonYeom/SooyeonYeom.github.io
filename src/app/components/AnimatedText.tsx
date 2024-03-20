import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../styles/colors';
import { useSpring, animated, SpringConfig } from 'react-spring';

interface TextProps {
  children: ReactNode;
  size?: keyof typeof sizes;
  weight?: keyof typeof weights;
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  animate?: boolean; 
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

const TextContainer = styled(animated.div)<TextProps>`
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

const AnimatedText: React.FC<TextProps> = ({ children, animate = false, ...rest }) => {
  const animationProps = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0)' : 'translateY(120px)',
    from: { opacity: 0, transform: 'translateY(120px)' },
    delay: 1000, 
    config: { duration: 800 }
  });

  return (
    <TextContainer style={animationProps} {...rest}>
      {children}
    </TextContainer>
  );
};

export default AnimatedText;
