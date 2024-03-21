import React, { useEffect, useState } from 'react';
import Stack from './Stack';
import { colors } from '../styles/colors';
import Button from '../components/Button'; 

interface ASCIICardProps {
  interiorAsciiArt: string;
  exteriorAsciiArt: string;
}

const ASCIICard: React.FC<ASCIICardProps> = ({ interiorAsciiArt, exteriorAsciiArt }) => {
  const [isInterior, setIsInterior] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 페이드 인 및 슬라이드 효과를 위해 클래스 추가
    setShow(true);
  }, []);

  const toggleInterior = () => {
    setIsInterior(!isInterior);
  };

  return (
    <div
      style={{
        position: 'relative', // 부모 요소를 기준으로 자식 요소를 배치할 수 있도록 position 속성 추가
        padding: '16px',
        borderRadius: '16px',
        backgroundColor: colors.Grey800,
        color: '#ffffff',
        height: '280px',
        overflow: 'auto', // ASCII art이 넘칠 경우 스크롤 표시
        opacity: show ? 1 : 0, // show 상태에 따라 투명도 설정
        transition: 'opacity 1s ease',// 투명도 트랜지션 설정
        transform: show ? 'translateY(0)' : 'translateY(100px)', // show 상태에 따라 이동 설정
        transitionProperty: 'opacity, transform', // 트랜지션 속성 설정
        transitionDuration: '1s', // 트랜지션 지속 시간 설정
        transitionTimingFunction: 'ease', // 트랜지션 타이밍 함수 설정
      }}
    >
      <pre style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
      {isInterior ? interiorAsciiArt : exteriorAsciiArt}</pre> {/* interior와 exterior에 따라 다른 ASCII art를 렌더링 */}
      <div
        style={{
          position: 'absolute', // 부모 요소를 기준으로 절대 위치로 배치하기 위해 absolute 위치 지정
          bottom: '12px', // 아래쪽 여백 추가
          right: '12px', // 오른쪽 여백 추가
        }}
      >
        <Button
          buttonText={isInterior ? 'Leave Home' : 'Enter Home'}
          buttonSize="medium"
          onClick={toggleInterior}
        />
      </div>
    </div>
  );
};

export default ASCIICard;
