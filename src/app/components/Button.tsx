import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../styles/colors';

// 버튼 크기를 나타내는 타입 정의
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  children?: ReactNode;
  buttonText?: string;
  fullWidth?: boolean;
  buttonSize?: ButtonSize; // 버튼 크기 프롭 추가
  onClick?: () => void; // 클릭 이벤트 핸들러 프롭 추가
}

// 버튼 크기에 따른 스타일 설정
const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        font-size: 12px;
        padding: 8px 12px;
      `;
    case 'large':
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    default:
      // medium일 때는 추가 스타일 필요 없음
      return css``;
  }
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${colors.Blue600};
  border: none;
  font-size: 14px;
  padding: 10px 16px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
  ${({ fullWidth }) => !fullWidth && css`width: fit-content;`}
  &:hover {
    background-color: ${colors.Blue700};
  }
  ${({ buttonSize }) => getSizeStyles(buttonSize || 'medium')} // 버튼 크기에 따른 스타일 적용
`;

const Button: React.FC<ButtonProps> = ({ children, buttonText, fullWidth, buttonSize, onClick }) => {
  return (
    <StyledButton fullWidth={fullWidth} buttonSize={buttonSize} onClick={onClick}>
      {buttonText || children}
    </StyledButton>
  );
};

export default Button;
