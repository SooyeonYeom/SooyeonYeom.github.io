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
  ___I|_________|I___||_____  
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
    <div style={{ height : '100vh', background: 'linear-gradient(180deg, #FFFFFF 0%, #B7D3FF 100%)'}}>
       <Header
        leftButtonText="PREV"
        leftButtonDestination="/"
        leftButtonSize="small"
      />
      <div style={{ padding: '72px 12% 0 12%' }}>
      <Stack direction='vertical' gutter={8}>
      <Text size="500" weight="semibold" color={colors.Grey800} textAlign="left">
      Welcome to MY ASCII TOWN
      </Text>  
      <Text size="300" weight="regular" color={colors.Grey600} textAlign="left">
      I currently live in an officetel near Seoul National University Station. I recently moved to a larger officetel, and it has become so pleasant. I think I will live for another two years. 
      <br/><br/>
      A good house for me is a "simple" space, because I think a place that will keep my lifestyle simple is a good house.</Text>   
      <Spacing height='16px'/>
      </Stack>
      <ASCIICard
          interiorAsciiArt={interiorAsciiArt}
          exteriorAsciiArt={exteriorAsciiArt}
        />  
      </div>
    </div>
  );
};

export default ASCIITOWNPage;
