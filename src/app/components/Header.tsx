import React, { useState, useEffect } from 'react';
import Text from '../components/Text';
import Button from '../components/Button';

interface HeaderProps {
  leftText: string;
  rightButtonText: string;
  rightButtonSize?: 'small' | 'medium' | 'large';
  rightButtonOnClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ leftText, rightButtonText, rightButtonSize, rightButtonOnClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header style={{ 
      position: 'fixed',
      top: 0,
      width: 'calc(100vw - 48px)',
      padding: '12px 24px',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      backdropFilter: 'blur(2px)',
      opacity: isLoaded ? 1 : 0, /* 로드된 후 투명도를 1로 변경하여 나타나게 함 */
      transition: 'opacity 1s ease' /* 트랜지션 효과 추가 */
    }}>
      {isLoaded && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Text size="400" weight="semibold">{leftText}</Text>
          <Button buttonText={rightButtonText} buttonSize={rightButtonSize || "small"} onClick={rightButtonOnClick} />
        </div>
      )}
    </header>
  );
};

export default Header;
