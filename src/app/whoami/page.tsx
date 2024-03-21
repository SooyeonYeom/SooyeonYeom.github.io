"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';
import Button from '../components/Button'; 
import Text from '../components/Text';
import AnimatedText from '../components/AnimatedText';
import { colors } from '../styles/colors';
import Stack from '../components/Stack';
import Header from '../components/Header';
import Spacing from '../components/Spacing';
import ASCIICard from '../components/ASCIICard';

const WhoamiPage: React.FC = () => {
  const [animateText, setAnimateText] = useState(false); // animateText state 추가


  return (
    <>
       <Header
        leftButtonText="PREV"
        leftButtonSize="small"
        leftButtonDestination="/"
      />
      <div style={{ margin: '72px 24px 0 24px' }}>
      
      </div>
    </>
  );
};

export default WhoamiPage;
