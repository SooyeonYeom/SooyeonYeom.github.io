// components/Spacing.tsx
import React from 'react';
import styled from 'styled-components';

interface SpacingProps {
  height?: string;
}

const SpacingContainer = styled.div<SpacingProps>`
  height: ${({ height }) => height || '20px'}; /* 기본값은 20px */
  background-color: transparent;
`;

const Spacing: React.FC<SpacingProps> = ({ height }) => {
  return <SpacingContainer height={height} />;
};

export default Spacing;
