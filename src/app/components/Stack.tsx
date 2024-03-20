// components/Stack.tsx
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface StackProps {
  children: ReactNode;
  direction?: 'vertical' | 'horizontal';
  gutter?: number;
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
  alignItems?: 'flex-start' | 'center' | 'flex-end';
}

const StackContainer = styled.div<StackProps>`
  display: flex;
  width: 100%; 
  flex-direction: ${({ direction }) => direction === 'vertical' ? 'column' : 'row'};
  gap: ${({ gutter }) => gutter ? `${gutter}px` : '0'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
`;

const Stack: React.FC<StackProps> = ({ children, direction = 'vertical', gutter = 0, justifyContent, alignItems }) => {
  return (
    <StackContainer direction={direction} gutter={gutter} justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </StackContainer>
  );
};

export default Stack;
