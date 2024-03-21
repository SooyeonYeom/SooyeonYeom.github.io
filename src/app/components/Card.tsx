import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'; // react-spring에서 필요한 요소 임포트
import { colors } from '../styles/colors';
import Text from './Text';
import Spacing from './Spacing';

// 카드 컴포넌트 스타일 정의
const CardContainer = styled(animated.div)`
  width: 240px;
  height: 140px;
  background: rgba(255, 255, 255, 0.70);
  backdrop-filter: blur(4px);
  border: 1px solid #FFF;
  border-radius: 24px;
  position: relative; /* 내부 요소를 위치시키기 위해 */
  transition: transform 0.2s, box-shadow 0.2s; /* 호버 효과를 위한 transition */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;


  /* 클릭 시 스타일 변경 */
  &:active {
    transform: scale(1.05); /* 살짝 축소 */
    border: 2px solid ${colors.Blue600};
    box-shadow: 0px 0px 20px rgba(0, 0, 255, 0.1); /* 파란색 그림자 추가 */
  }
`;

// 이미지 Wrapper 스타일 정의
const ImageWrapper = styled.div`
  width: 72px;
  height: 72px;
`;

// 이미지 스타일 정의
const Image = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover; /* 이미지를 카드 크기에 맞게 조절 */
`;

// Text 컴포넌트 스타일 정의
const CardText = styled(Text)`
  top: 50%; /* 세로 중앙 정렬을 위해 */
  transform: translateY(-50%); /* 세로 중앙 정렬을 위해 */
  color: ${colors.Grey700};
  text-decoration: none;
`;

interface CardProps {
  imageUrl?: string;
  text: string;
  onClick?: () => void; // onClick prop 추가
}

const Card: React.FC<CardProps> = ({ imageUrl, text, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-120px)' }, // 아래에서 위로 나타나도록 수정
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0)',
    delay: 1200, // 카드가 처음에 나타날 때의 딜레이
    config: { duration: 800 }
  });

  const hoverSpringProps = useSpring({
    transform: hovered ? 'scale(1.08)' : 'scale(0.9)',
    boxShadow: hovered
      ? '0px 0px 20px rgba(0, 0, 0, 0.1)'
      : '0px 0px 20px rgba(0, 0, 0, 0)',
    config: { duration: 20, friction: 20 }, // 마우스 호버 시 애니메이션 속도
      });

  return (
    <CardContainer
      style={{ ...springProps, ...hoverSpringProps }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ImageWrapper>
        {imageUrl && <Image imageUrl={imageUrl} />}
      </ImageWrapper>
      <Spacing height='24px' />
      <CardText size="300" weight="medium" textAlign="center">{text}</CardText>
    </CardContainer>
  );
};

export default Card;
