import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! This is <br />
          Nico Blasutig
        </SectionTitle>
        <SectionText>
        I am a Full Stack Web Developer specialized in Front End with React. 
        </SectionText>
        <Button onClick={props.handleClick}>Contact</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;