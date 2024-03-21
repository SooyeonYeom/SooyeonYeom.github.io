import React, { useState, useEffect } from 'react';
import Text from '../components/Text';
import Button from '../components/Button';
import Stack from './Stack';
import { colors } from '../styles/colors';
import Link from 'next/link';

interface HeaderProps {
  headerText?: string;
  leftButtonText?: string;
  leftButtonOnClick?: () => void;
  rightButtonText?: string;
  rightButtonOnClick?: () => void;
  leftButtonSize?: 'small' | 'medium' | 'large';
  rightButtonSize?: 'small' | 'medium' | 'large';
  leftButtonDestination?: string;
}

const Header: React.FC<HeaderProps> = ({
  headerText,
  leftButtonText,
  leftButtonOnClick,
  rightButtonText,
  rightButtonOnClick,
  leftButtonSize,
  rightButtonSize,
  leftButtonDestination
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        width: 'calc(100vw - 48px)',
        padding: '12px 24px',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        backdropFilter: 'blur(2px)',
        top : 0,
        opacity: isLoaded ? 1 : 0, // 투명도가 조정되도록 설정
        transition: 'opacity 0.2s ease', // opacity 속성의 변화를 애니메이션화
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Stack direction="horizontal" gutter={0}>
          {headerText && <Text size='400' weight='semibold' color={colors.Grey800}>{headerText}</Text>}
          {leftButtonText && (
            <Link href={leftButtonDestination  || ''} passHref>
            <Button
              buttonText={leftButtonText}
              buttonSize={leftButtonSize || 'small'}
              onClick={leftButtonOnClick}
            />
            </Link>
          )}
        </Stack>
        {rightButtonText && (
          <Button
            buttonText={rightButtonText}
            buttonSize={rightButtonSize || 'small'}
            onClick={rightButtonOnClick}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
