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


const ASCIITOWNPage: React.FC = () => {
  const [animateText, setAnimateText] = useState(false); // animateText state 추가


  const interiorAsciiArt = `
  ________________________
  |                      |
  | soo yeon yeom's Home |
  |______________________| 

  

                    ____
                  /    \\
                  /______\\
                    ||
      /~~~~~~~~\\     ||   
    /~ () ()  ~\\    ||  
    (_)========(_)   ||  
  ___I|_________|I  _||_  
  /////////////////////////
`;


const exteriorAsciiArt = `
  __________________
  |                |
  | snu entatrance |
  |________________| 
               
  ______________      
  |  ___  ___  |        
  | |___||___| |           
  |  ___  ___  |            
  | |___||___| |        
  |  ___  ___  |                             
  | |___||___| |                        
  |  ___  ___  |   
  | |___||___| |   
  |     __ __  |    
  |    ( ||| ) |
  |    ( ||| ) |
  ^^^^^^^^^^^^^^^^^^^^^^^^^^
`;


  return (
    <>
       <Header
        leftButtonText="PREV"
        leftButtonDestination="/"
        leftButtonSize="small"
      />
      <div style={{ margin: '72px 24px 0 24px' }}>
      <ASCIICard
          interiorAsciiArt={interiorAsciiArt}
          exteriorAsciiArt={exteriorAsciiArt}
        />
      </div>
    </>
  );
};

export default ASCIITOWNPage;
