import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Marketing College Student - UCES'},
  { number: 1000, text: 'Full Stack Web Developer - Digital House', },
  { number: 1900, text: 'Algorithms & Data Structures Certification - FreeCodeCamp', },
  {text: "Google Ads Certification - Google"}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
