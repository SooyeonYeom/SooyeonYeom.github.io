"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';
import Button from './components/Button'; 
import Text from './components/Text';
import AnimatedText from './components/AnimatedText';
import { colors } from './styles/colors';
import Stack from './components/Stack';
import Header from './components/Header';
import Spacing from './components/Spacing';
import Card from './components/Card';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none; /* 링크에 대한 텍스트 장식을 없앱니다. */
`;


const MyPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/l4Ip2suMuOkiq5CT/scene.splinecode');
      setAnimateText(true);
    }
  }, []);

  const handleButtonClick = () => {
    window.location.href = 'mailto:valikys@snu.ac.kr';
  };

  return (
    <>
      <Header headerText="SYLab" rightButtonText="CONTACT" rightButtonSize="small" rightButtonOnClick={handleButtonClick} />
      <div style={{ margin: '72px 24px 0 24px' }}>
        <Stack direction="vertical" gutter={8} alignItems="center">
          <AnimatedText size="700" weight="semibold" color={colors.Grey800} textAlign="center" animate={animateText}>Hello! I'm Sooyeon Yeom</AnimatedText>     
          <Spacing height="16px" />
          <AnimatedText size="300" weight="regular" color={colors.Grey600} textAlign="center" animate={animateText}>I'm majoring in visual design at SNU.</AnimatedText>
          <AnimatedText size="300" weight="regular" color={colors.Grey600} textAlign="center" animate={animateText}>I usually design and sometimes develop.</AnimatedText>
          <Spacing height="16px" />
          <Stack direction="vertical" gutter={8} alignItems="center" justifyContent='center'>
          <StyledLink href="/asciitown">
            <Card imageUrl="/town.png" text="ASCII TOWN" />
          </StyledLink>
          <StyledLink href="https://sooyeonyeom.oopy.io/">
            <Card imageUrl="/love.png" text="WHO AM I" />
          </StyledLink>
          </Stack>
     
        </Stack>
      </div>
      <canvas style={{ position: 'fixed', top: 0, zIndex:-100}} ref={canvasRef} id="canvas3d" />
    </>
  );
};

export default MyPage;

